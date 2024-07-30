import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setArrayTickets, setChangeAdminArrayTickets, setIsLoadedDays, setIsModal } from '../../features/reservation/reservationSlice';
import "../admin/Admin.css";
import AdminFixTickets from './AdminFixTickets';
import AdminFixTicketsList from './AdminFixTicketsList';
export default function Admin() {
  
    const dispatch = useDispatch()
    const {arrayTickets,localUrl,changeAdminArrayTickets,isModal} = useSelector((state)=>state.reservation)

    async function getPostsForAdmin() {
      await fetch(`${localUrl}/tickets`,{ referrer:'unsafe-url'})
          .then(response => response.json())
          .then(data =>  dispatch(setArrayTickets(Object.values(data))))
          .catch(error => console.error(error))
        
      }
      useEffect(() => {
        getPostsForAdmin();
      }, [changeAdminArrayTickets,isModal]);

      const deleteTicket = (item) => {
     
      fetch(`${localUrl}/deleteTicket`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({idTicket : item.id}),
        })
        .then(response => response.json())
        .then((response)=> 
        {
          console.log(response)
         if(response.title == 'ok') {
          getPostsForAdmin()
          dispatch(setIsLoadedDays(false))
         }
       
        })
        
        
      }
      


  return (
    <div className='App_admin_panel'>
    <h2>Панель бронирования</h2>
    <div className='App_admin_dashboard'>
    <div className='App_admin_dashboard_item header' >
      <div>Email</div>
      <div>Имя</div>
      <div>Телефон</div>
      <div>Дата</div>
      <div>Дата операции</div>
      <div>Кол-во билетов</div>
      <div>Удалить</div>
      </div>
      {
        arrayTickets.map((item,key)=>(
          <div className='App_admin_dashboard_item' key={key}>
             <div> {item.email} </div>
             <div> {item.name} </div>
         <div>  {item.phone}  </div>
           <div> {item.date}  </div>
           <div> {item.dateOrder}  </div>
           <div> {item.countTickets}  </div>
            <div>  <button onClick={()=>deleteTicket(item)}>X</button> </div>
            
          
          </div>
        ))
      }
    </div>
    
   <AdminFixTickets/>

   <AdminFixTicketsList />

   </div>

  )
}
