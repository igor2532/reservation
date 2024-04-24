import React from 'react'

export default function Modal() {
  return (
    <>
 
  <div className='App_modal'>
    <div className='App_modal_form'>
      <div className='App_modal_top'>
        <h2>Четверг 28 апреля 2024г</h2>
      </div>
      <div className='App_modal_bottom'>
       <div className='App_Modal_TimeBlocks'>
        <div>
          <span className='App_modal_time'>14:00</span>
          <span className='App_modal_tickets'>15</span>
        </div>
        <div>
          <span className='App_modal_time'>15:00</span>
          <span className='App_modal_tickets'>15</span>
        </div>
        <div>
          <span className='App_modal_time'>16:00</span>
          <span className='App_modal_tickets'>15</span>
        </div>
        <div>
          <span className='App_modal_time'>17:00</span>
          <span className='App_modal_tickets'>15</span>
        </div>
       </div>

      </div>
    </div>
  </div>
  </>
  )
}
