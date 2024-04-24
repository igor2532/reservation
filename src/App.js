
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Modal from './Modal';

function App() {
 
 const [arrayValue, setArrayValue] = useState([]);
 const [isModal, setIsModal] = useState(false)


 
 const sasa = () => {

console.log(arrayValue)
 }
 

 async function getPosts() {
  const res = await fetch('http://localhost:3001/',{ referrer:'unsafe-url'})
    .then(response => response.json())
    .then(data =>  setArrayValue(Object.values(data)))
    .catch(error => console.error(error))
  
}


// async function fetchData() {
//   await axios("http://localhost:3001/").catch(()=>{
//     console.log('Нет соединения')
//   }).then((data)=>{ 
    
//     if (data == undefined) {
//       setArrayValue(Object.values(data))
//     }
//    });
  
  // axios.get('http://localhost:3001/')
  // .catch(function (error) {
   
  //   if (error.response) {
  //     console.log(error.response.data);
  //     console.log(error.response.status);
  //     console.log(error.response.headers);
  //   } else if (error.request) {
   
  //     console.log(error.request);
  //   } else {
  //     console.log('Error', error.message);
  //   }
  //   console.log(error.config);
  // }).then((data)=>{
  //   setArrayValue(Object.values(data))
  // });



 
// }

useEffect(() => {
  getPosts();
}, [arrayValue]);

  return (
<>
<div className="App" style={{filter:isModal?'blur(4px)':'unset'}}>
     <div className='saH'>
    
</div>
      <div onClick={()=>isModal?setIsModal(false):''} className='App_calendar_month'>
     
    {arrayValue.length>0 &&
    arrayValue.map( (item,key) => (
      <div style={{background:item.freeTickets==0?'#f8c3c3':'#cdf1cd'}}>
        <div style={{color:item.isWeekend?'red':'black',fontWeight:'bold'}} className='App_calendar_dayOf'>{item.weekOfDay}</div>
       <div className='App_calendar_day'>{item.id}</div> 
       
       <div className='App_calendar_button'><button  onClick={()=>setIsModal(!isModal)} style={{background:item.freeTickets==0?'red':'green'}}>({item.freeTickets})</button></div>
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
