import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setArrayInDay, setDateCurrent, setIsActiveTicketTiem, setIsLoaded, setIsModal, setValueDateReservation } from '../features/reservation/reservationSlice';
import ModalForm from './ModalForm';
import rabbitResize from "../rabbitresize.png";
export default function Modal() {

const dispatch = useDispatch()
const {arrayInDayValue,dateCurrent,isActiveTicketTiem,localUrl,isLoaded} = useSelector((state)=>state.reservation)
  async function getTimes() {
   const res =  await fetch(`${localUrl}/dates/${dateCurrent}`,{ referrer:'unsafe-url'})
      .then(response => response.json())
      .then(data => {
     dispatch(setArrayInDay(Object.values(data)))
      dispatch(setIsLoaded(true))
      console.log('loaded')
    } 
    )
      .catch(error => console.error(error))
  }
  useEffect(() => {
    getTimes();
  }, [dateCurrent]);

const handleTicket = (item)=> {
  if(item.countsFreeTickets==0) {
    getTimes();
  } 
   else {
    dispatch(setValueDateReservation(item.dateReservation))
    dispatch(setIsActiveTicketTiem(item.id))
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
    isLoaded &&
    arrayInDayValue.map((item,key)=>(
      item.countsFreeTickets!=0 &&
      <div  key={key} style={{border:isActiveTicketTiem==item.id?'1px solid #f7a828':'1px solid white'}}  onClick={()=>handleTicket(item)}>
      <span className='App_modal_time'>{item.timeV} </span>
      <span className='App_modal_tickets'>{item.countsFreeTickets}</span>
    </div>
    ))
    
    }



       </div>
       {!isLoaded &&
 <div className='App_loading'><span class="loader"></span></div>
}   
      </div>
      <img src={rabbitResize} className='App_rabbit_resize' />
    </div>
    
  </div>
  </>
  )
}
