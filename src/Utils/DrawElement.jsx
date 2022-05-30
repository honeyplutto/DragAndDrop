import React from 'react'
import Modal from '../Components/Modal/Modal'
import '../Components/Sidebar/Sidebar.css'

function DrawElement({element}) {
  return (
    <div className='element_pattern'>
        <label htmlFor={element.id}>
            {element.label}
        </label>
        {element.type === 'textarea' ? 
          <>
            <textarea
              style={{width: '150px', height: '40px'}}>
            </textarea>
          </> : 
          element.type === 'select' ? 
          <>
            <select
              style={{width: '150px', height: '20px'}}>
            </select>
          </> : 
          <input 
            type = {element.type}
            style = {{width: '150px', height: '20px'}} 
          />} 
    </div>
  )
}

export default DrawElement