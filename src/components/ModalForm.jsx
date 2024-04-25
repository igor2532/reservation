import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCountTickets, setIsActiveTicketTiem, setValueEmail, setValueName, setValuePhone } from '../features/reservation/reservationSlice';

export default function ModalForm() {
   const dispatch = useDispatch()
   const {valueEmail, valueName, valuePhone, countTickets,valueDateReservation,isActiveTicketTiem,isModal} = useSelector((state)=> state.reservation)
    const sendQuery = () => {
     
        fetch(`http://localhost:3001/insert`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({valueEmail, valueName, valuePhone, countTickets,valueDateReservation}),
  })
  
    }
    useEffect(()=>{
        if(isModal) {
            dispatch(setIsActiveTicketTiem(0))
        }
    },[])
  return (
<>
   
    <div className='App_modal_form_top'>
        <input placeholder='Ваше имя' onChange={(e)=>dispatch(setValueName(e.target.value))} />   <input  onChange={(e)=>dispatch(setValueEmail(e.target.value))} placeholder='Email' />
    </div>
    <div className='App_modal_form_middle'>
        <input  onChange={(e)=>dispatch(setValuePhone(e.target.value))} placeholder='Телефон' />  <select  onChange={(e)=>dispatch(setCountTickets(e.target.value))}>
            <option selected>Количество билетов</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            </select>
    </div>
    <div className='App_modal_form_btn'><button disabled={isActiveTicketTiem==0?true:false} onClick={sendQuery}>Забронировать</button></div>
    </>
  )
}
