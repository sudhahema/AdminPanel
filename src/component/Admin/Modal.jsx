import React from 'react'

function Modal({OnDelete}) {
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
        <button type='button' >YES</button>
        <button type='button' >NO</button>
        </div>
    </div>
  )
}

export default Modal