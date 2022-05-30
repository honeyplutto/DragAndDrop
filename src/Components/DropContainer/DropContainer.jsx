import React, { useState } from 'react'
import DrawElement from '../../Utils/DrawElement'
import Modal from '../Modal/Modal'
import './DropContainer.css'
import { initalStyle } from '../../Utils/initalStyle'

function DropContainer( { addElement, dragOver, dropElement, draggable } ) {

    const [isOpen, setIsOpen] = useState(false);
    const [initStyle, setInitStyle] = useState(initalStyle);
    
    const handleSubmit = (e) => {
      e.preventDefault();
      setInitStyle(e);
    }

    return (
      <div className='drop_container'>
          {dropElement.map((item, i) => (
            <div
              className = {'element' + ((item === 1) ? ' active' : '')}
              key = {i}
              onDrop =  {(e) => addElement(e,i) }
              draggable = { draggable }
              onDragOver = { dragOver }
              style = { initStyle }
            >
              {typeof item !== 'number' ? 
                <>
                  <DrawElement element={item} />
                  <button 
                    type="button"
                    onClick={() => {setIsOpen(true)}}>
                      Modal
                  </button>
                  {isOpen && <Modal 
                    setIsOpen={setIsOpen}
                    handleSubmit={handleSubmit}
                    initalStyle = {initStyle}
                  />}
                </>  
                : <></>  
              }
            </div>
          ))}
      </div>
    )
}

export default DropContainer