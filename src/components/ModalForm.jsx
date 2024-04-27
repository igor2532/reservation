import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCountTickets, setIsActiveTicketTiem, setIsModal, setIsValideForm, setValueEmail, setValueName, setValuePhone } from '../features/reservation/reservationSlice';

export default function ModalForm() {
   const dispatch = useDispatch()
   const {valueEmail, valueName, valuePhone, countTickets,valueDateReservation,isActiveTicketTiem,isModal,isValideForm,localUrl} = useSelector((state)=> state.reservation)
    const sendQuery = () => {
        fetch(`${localUrl}/insert`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({valueEmail, valueName, valuePhone, countTickets,valueDateReservation}),
  })
     dispatch(setIsModal(false))
    }
    useEffect(()=>{
        if(valueEmail != '' && valueName != '' &&  valuePhone != '' && isActiveTicketTiem !== 0 ){
          dispatch(setIsValideForm(true))
        }
        else{
          dispatch(setIsValideForm(false))
        }

    

    },[valueEmail, valueName, valuePhone,countTickets,isActiveTicketTiem])
  return (
<>
   
    <div className='App_modal_form_top'>
        <input placeholder='Ваше имя' onChange={(e)=>dispatch(setValueName(e.target.value))} />   <input  onChange={(e)=>dispatch(setValueEmail(e.target.value))} placeholder='Email' />
    </div>
    
    <div className='App_modal_form_middle'>
        <input  onChange={(e)=>dispatch(setValuePhone(e.target.value))} placeholder='Телефон' /> 
        <label>Кол-во билетов:</label>
         <select  onChange={(e)=>dispatch(setCountTickets(e.target.value))}>
            <option selected value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            </select>
        
    </div>
    <div style={{display:isValideForm?'flex':'none'}} className='App_modal_form_btn'><button disabled={isActiveTicketTiem==0?true:false} onClick={sendQuery}>Забронировать</button></div>
    </>
  )
}
