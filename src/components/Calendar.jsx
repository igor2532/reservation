import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {setArrayValue, setCountTickets, setCurrentMonth, setDateCurrent, setDateData, setIsActiveTicketTiem, setIsLoaded, setIsLoadedDays, setIsModal, setIsValideForm, setMonthValue, setNumberMonth, setValueEmail, setValueName, setValuePhone } from '../features/reservation/reservationSlice';
import Modal from '../components/Modal.jsx'


export default function Calendar() {
    const dispatch = useDispatch()
    const {arrayValue,monthValue,isModal,dateCurrent,localUrl,isLoadedDays,monthsArray,currentMont,numberMonth,changeAdminArrayTickets} = useSelector((state)=>state.reservation)
     const [dateValue,setDate ] = useState();
     async function getPosts(isSilent) {
      const res = await fetch(`${localUrl}/api/${currentMont}`,{ referrer:'unsafe-url'})
        .then(response => response.json())
        .then(data =>{
       
         
       
   
    if(data.length>=0 && isLoadedDays) {
      dispatch(setArrayValue(Object.values(data)))
      dispatch(setIsLoadedDays(true))
    } 
   
     
        }).catch(error => {
          console.error(error)
         dispatch(setIsLoadedDays(false))
         }) 
    }



 
    useEffect(() => {
      getPosts(false);


      setInterval(()=>{
        getPosts(true);
        
      },9000)
   



    console.log(changeAdminArrayTickets)
    }, [isModal,changeAdminArrayTickets,isLoadedDays]);
    
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
    
    const nextMonth = () => {
      dispatch(setIsLoadedDays(false))
      dispatch(setNumberMonth(numberMonth+1))
    
   const newArr = monthsArray.filter((item,key)=>item.month==numberMonth+1)
    newArr.map((item,key)=>{
      dispatch(setMonthValue(item.text))
      dispatch(setCurrentMonth(item.title))
    })
  
   }

   const previousMonth = () => {

    dispatch(setIsLoadedDays(false))
    dispatch(setNumberMonth(numberMonth-1))
  
 const newArr = monthsArray.filter((item,key)=>item.month==numberMonth-1)
  newArr.map((item,key)=>{
    dispatch(setMonthValue(item.text))
    dispatch(setCurrentMonth(item.title))
   })

 }



  return (
    <>


    {
      isLoadedDays &&


<div onClick={()=>isModal?dispatch(setIsModal(false)):''} className="App" style={{filter:isModal?'blur(4px)':'unset'}}>
     <div className='App_top'>
     <div className='App_update'>
     <button onClick={previousMonth}>Предыдущий месяц месяц</button>
      <button onClick={
      ()=>{
        dispatch(setIsLoadedDays(false))
        getPosts()
      }
     }>Обновить календарь</button><button onClick={nextMonth}>Следующий месяц</button></div>
    
    <h1>  {monthValue}   </h1>
</div>
{arrayValue.length ==0 && 
        <div className='App_calendat_empty'>Нет результата</div>
        }
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
        dispatch(setIsLoaded(false))
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
      }

     {!isLoadedDays &&
 <div className='App_loading'><span class="loader blackSpinner"></span></div>

}   
     { isModal &&
      <Modal />
       }
</>

  )
}
