import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setArrayTicketsFixedAdmin } from '../../features/reservation/reservationSlice';
export default function AdminFixTicketsList() {
    const dispatch = useDispatch();
    const {arrayTicketsFixedAdmin,localUrl,changeAdminArrayTickets,isModal} = useSelector((state)=> state.reservation)
    async function getPostsForAdminFixTickets() {
        await fetch(`${localUrl}/fixticketsadmin`,{ referrer:'unsafe-url'})
            .then(response => response.json())
            .then(data =>  dispatch(setArrayTicketsFixedAdmin(Object.values(data))))
            .catch(error => console.error(error))
          
        }
        useEffect(() => {

          getPostsForAdminFixTickets();
        console.log(arrayTicketsFixedAdmin)
        }, [changeAdminArrayTickets,isModal]);
  return (
   <div className='App_array_items'>
     {  arrayTicketsFixedAdmin.map((item,key)=>(
        <div className='App_admin_item_fixed' key={key}>
            <div><span>Дата:</span>{item.date}</div>
            <div><span>Билетов:</span>{item.count}</div>
            </div>
       ))
    }
   </div>


  )
}
