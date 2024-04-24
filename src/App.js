
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Modal from './Modal';

function App() {
 
 const [arrayValue, setArrayValue] = useState([]);
 const [isModal, setIsModal] = useState(false)
const [monthValue, setMonthValue] = useState('Апрель')

 
 const sasa = () => {

console.log(arrayValue)
 }
 

 async function getPosts() {
  const res = await fetch('http://localhost:3001/',{ referrer:'unsafe-url'})
    .then(response => response.json())
    .then(data =>  setArrayValue(Object.values(data)))
    .catch(error => console.error(error))
  
}



useEffect(() => {
  getPosts();
}, [arrayValue,monthValue]);

  return (
<>
<div onClick={()=>isModal?setIsModal(false):''} className="App" style={{filter:isModal?'blur(4px)':'unset'}}>
     <div className='App_top'>
    <h1>{monthValue}</h1>
</div>
      <div  className='App_calendar_month'>
     
    {arrayValue.length>0 &&
    arrayValue.map( (item,key) => (
      <div style={{background:item.freeTickets==0?'#f8c3c3':'#cdf1cd',borderColor:item.freeTickets==0?'white':'#005d58'}}>
        <div style={{color:item.isWeekend?'red':'black',fontWeight:'bold'}} className='App_calendar_dayOf'>{item.weekOfDay}</div>
       <div className='App_calendar_day'>{item.id}</div> 
       
       <div className='App_calendar_button'><button disabled={item.freeTickets==0}  onClick={()=>setIsModal(!isModal)} style={{display:item.freeTickets==0?'none':''}}>({item.freeTickets})</button></div>
      </div>
    ))}

     </div>
   
   
     


    </div>
      {isModal &&
        <Modal />
        }
        </>
  );
}

export default App;
