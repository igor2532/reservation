import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setArrayInDay, setDateCurrent } from './features/reservation/reservationSlice';

export default function Modal() {

const dispatch = useDispatch()
const {arrayInDayValue,dateCurrent} = useSelector((state)=>state.reservation)
  async function getTimes() {
    const res = await fetch(`http://localhost:3001/dates/${dateCurrent}`,{ referrer:'unsafe-url'})
      .then(response => response.json())
      .then(data =>  dispatch(setArrayInDay(Object.values(data))))
      .catch(error => console.error(error))
  }
 
  useEffect(() => {
 
    setDateCurrent('dd')
    getTimes();
  }, [arrayInDayValue,dateCurrent]);



  return (
    <>
 
  <div className='App_modal'>
    <div className='App_modal_form'>
      <div className='App_modal_top'>
        <h2>{dateCurrent} </h2>
      </div>
      <div className='App_modal_bottom'>
       <div className='App_Modal_TimeBlocks'>


   {
    arrayInDayValue.map((item,key)=>(
      <div>
      <span className='App_modal_time'>{item.timeV}</span>
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
