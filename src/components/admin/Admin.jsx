import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setArrayTickets, setChangeAdminArrayTickets, setIsLoadedDays, setIsModal } from '../../features/reservation/reservationSlice';

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
    <h2>Тут админка</h2>
    <div>
      {
        arrayTickets.map((item,key)=>(
          <div key={key}>
           {item.email}   {item.name}   {item.phone}  {item.date} {item.id}  <button onClick={()=>deleteTicket(item)}>X</button>
          </div>
        ))
      }
    </div>
   </div>

  )
}
