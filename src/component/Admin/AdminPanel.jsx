import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Read from '../CurdOperation/ReadData';

function AdminPanel() {
  const [show , setShow] = useState(true);

  return (
    <>
    <Header setShow = {setShow}/>
    <div className='panel_container'>
    {show && <Sidebar/>}     
    <div className='admin_content'>
      <Read />
    </div>
    </div>
    </>
  )
}

export default AdminPanel