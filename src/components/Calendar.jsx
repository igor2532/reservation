import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {setArrayValue, setCountTickets, setDateCurrent, setIsActiveTicketTiem, setIsModal, setIsValideForm, setValueEmail, setValueName, setValuePhone } from '../features/reservation/reservationSlice';
import Modal from '../components/Modal.jsx'


export default function Calendar() {
    const dispatch = useDispatch()
    const {arrayValue,monthValue,isModal,dateCurrent} = useSelector((state)=>state.reservation)
     
     async function getPosts() {
      const res = await fetch('http://localhost:3001/',{ referrer:'unsafe-url'})
        .then(response => response.json())
        .then(data =>  dispatch(setArrayValue(Object.values(data))))
        .catch(error => console.error(error)) 
    }
    
    
    
    useEffect(() => {
      getPosts();
    
    }, [arrayValue,monthValue]);
    
    const getWeekDay = (week) => {
      switch (parseInt(week)) {
        case 0:
          return 'Вс'
         
        case 1:
          return 'Пн'
       
        case 2:
          return 'Вт'
        
          case 3:
            return 'Ср'
           
            case 4:
          return 'Чт'
        
          case 5:
            return 'Пт'
          
            case 6:
              return 'Сб'
           
        default:
          return 'Сб'
      }
    
    }
    
    const getStyleWeek = (week) => {
      if (week==6 || week==0){
        return 'red'
      }
      else
      {
        return 'black'
      }
    }
    
  return (
    <>
<div onClick={()=>isModal?dispatch(setIsModal(false)):''} className="App" style={{filter:isModal?'blur(4px)':'unset'}}>
     <div className='App_top'>
    <h1>{monthValue}</h1>
</div>
      <div  className='App_calendar_month'>
    {arrayValue.length>0 &&
    arrayValue.map( (item,key) => (
      <div key={key} style={{background:item.countsFreeTickets==0 || item.isCloseReserv==1?'#f8c3c3':'#cdf1cd',borderColor:item.countsFreeTickets==0?'white':'#005d58'}}>
        <div style={{color:getStyleWeek(item.week)}} className='App_calendar_dayOf'>{getWeekDay(item.week)}</div>
       <div className='App_calendar_day'>{
       parseInt( item.day)
       }</div> 
       <div className='App_calendar_button'><button disabled={item.countsFreeTickets==0|| item.isCloseReserv==1}  onClick={()=>{
        dispatch(setIsModal(!isModal))
        dispatch(setDateCurrent(item.dmw))

        dispatch(setIsActiveTicketTiem(0))
        dispatch(setIsValideForm(false))
        dispatch(setValueEmail(''))
        dispatch(setValueName(''))
        dispatch(setValuePhone(''))
        dispatch(setCountTickets(1))
        console.log(item.dmw)
       }
        } style={{display:item.countsFreeTickets==0|| item.isCloseReserv==1?'none':''}}>({item.countsFreeTickets})</button></div>
      </div>
    ))}

     </div>
    </div>

     { isModal &&
      <Modal />
       }
</>

  )
}
