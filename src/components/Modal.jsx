import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setArrayInDay, setDateCurrent, setIsActiveTicketTiem, setIsModal, setValueDateReservation } from '../features/reservation/reservationSlice';
import ModalForm from './ModalForm';

export default function Modal() {

const dispatch = useDispatch()
const {arrayInDayValue,dateCurrent,isActiveTicketTiem} = useSelector((state)=>state.reservation)
  async function getTimes() {
   const res =  await fetch(`http://localhost:3001/dates/${dateCurrent}`,{ referrer:'unsafe-url'})
      .then(response => response.json())
      .then(data =>  dispatch(setArrayInDay(Object.values(data))))
      .catch(error => console.error(error))
  }
  useEffect(() => {
    getTimes();
  }, [dateCurrent,arrayInDayValue]);

const handleTicket = (item)=> {
  if(item.countsFreeTickets==0) {
    getTimes();
  } 
   else {
    dispatch(setValueDateReservation(item.dateReservation))
    dispatch(setIsActiveTicketTiem(item.id))
    console.log(isActiveTicketTiem)
    getTimes();
   }
} 


  return (
    <>
  <div className='App_modal'>
    <div className='App_modal_form'>
      <div className='App_modal_top'>
        <h2>{dateCurrent} </h2>
      </div>

      <div className='App_modal_middle'> 
       <ModalForm /></div>
      <div className='App_modal_bottom'>

       <div className='App_Modal_TimeBlocks'>
   {
    arrayInDayValue.map((item,key)=>(
      item.countsFreeTickets!=0 &&
      <div  key={key} style={{border:isActiveTicketTiem==item.id?'3px solid #fbfbfb':'3px solid #fbfbfb00'}}  onClick={()=>handleTicket(item)}>
      <span className='App_modal_time'>{item.timeV} </span>
      <span className='App_modal_tickets'>{item.countsFreeTickets}</span>
    </div>
    ))
   }
       </div>

      </div>
    </div>
  </div>
  </>
  )
}
