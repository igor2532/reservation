import React, { useState } from 'react'
import { Provider, useDispatch, useSelector } from "react-redux";
import { setCountTickets, setValueDate,setDateTimeValue } from '../../features/reservation/reservationSlice';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import 'dayjs/locale/ru';
export default function AdminFixTickets() {
    const {countTickets,valueDateReservation,localUrl,setIsLoadedDays,dateTimeValue} = useSelector((state)=> state.reservation)
    const dispatch = useDispatch();
    const sendQuery = () => {
    console.log(dateTimeValue)
      fetch(`${localUrl}/insertFixDate`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({dateTimeValue, countTickets}),
    }).then((response)=> response.json()).then((response)=>{
        
      if(response.title == 'ok') 
    {
      dispatch(setIsLoadedDays(false))
    }
    })
      }


  return (
  <>
  <div className='App_admin_add_fix'>
  <div className='App_admin_add_fix_select'>
        <label>Кол-во билетов:</label>
         <select  onChange={(e)=>dispatch(setCountTickets(e.target.value))}>
            <option selected defaultValue='1'>1</option>
            <option defaultValue='2'>2</option>
            <option defaultValue='3'>3</option>
            <option defaultValue='4'>4</option>
            <option defaultValue='5'>5</option>
            <option defaultValue='6'>6</option>
            <option defaultValue='7'>7</option>
            <option defaultValue='8'>8</option>s
            </select>
  </div>

  <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker className='App_Date_Picker'  format={"DD-MM-YYYY HH:mm"}
  onChange={(timeValue) => {
    
    const m = timeValue.$M+1<10?`0${timeValue.$M+1}`:timeValue.$M+1;
    const y = timeValue.$y;
    const d = timeValue.$D<10?`0${timeValue.$D}`:timeValue.$D;
    const h = timeValue.$H<10?`0${timeValue.$H}`:timeValue.$H;
    const min = timeValue.$m<10?`0${timeValue.$m}`:timeValue.$m;

    dispatch(setDateTimeValue(String(`${y}-${m}-${d} ${h}:${min}:00`)))
    console.log(typeof(`${y}-${m}-${d} ${h}:${min}:00`));
    } } label="Выберите дату" />
      </DemoContainer>
    </LocalizationProvider>

  <div  className='AppFixTicketsAdd'><button onClick={sendQuery}  >Добавить билеты</button></div>
  </div>
  </>
  )
}
