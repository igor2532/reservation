
import './App.css';

function App() {
  const month = [
    {title:1,dayOfWeek:'Пн',isWeekend:false},
    {title:10,dayOfWeek:'Вт',isWeekend:false},
    {title:11,dayOfWeek:'Ср',isWeekend:false},
    {title:12,dayOfWeek:'Чт',isWeekend:false},
    {title:13,dayOfWeek:'Пт',isWeekend:false},
    {title:14,dayOfWeek:'Сб',isWeekend:true},
    {title:15,dayOfWeek:'Вс',isWeekend:true},
    {title:16,dayOfWeek:'Пн',isWeekend:false},
    {title:17,dayOfWeek:'Вт',isWeekend:false},
    {title:18,dayOfWeek:'Ср',isWeekend:false},
    {title:19,dayOfWeek:'Чт',isWeekend:false},
    {title:20,dayOfWeek:'Пт',isWeekend:false},
    {title:21,dayOfWeek:'Сб',isWeekend:true},
    {title:22,dayOfWeek:'Вс',isWeekend:true},
    {title:23,dayOfWeek:'Пн',isWeekend:false},
    {title:24,dayOfWeek:'Вт',isWeekend:false},
    {title:25,dayOfWeek:'Ср',isWeekend:false},
    {title:26,dayOfWeek:'Чт',isWeekend:false},
    {title:27,dayOfWeek:'Пт',isWeekend:false},
    {title:28,dayOfWeek:'Сб',isWeekend:true},
    {title:29,dayOfWeek:'Вс',isWeekend:true},
    {title:30,dayOfWeek:'Пн',isWeekend:false},
  ]


  fetch('https://myapi-5b0f.onrender.com/')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

  return (
    <div className="App">
     



   
      <div className='App_calendar_month'>
     
    {month.map( (item,key) => (
      <div>
        <div style={{color:item.isWeekend?'red':'black',fontWeight:'bold'}} className='App_calendar_dayOf'>{item.dayOfWeek}</div>
       <div className='App_calendar_day'>{item.title}</div> 
       <div><button>Заказать билет</button></div>
      </div>
    ))}

     </div>
   
   
     


    </div>
  );
}

export default App;
