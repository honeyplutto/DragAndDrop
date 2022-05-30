import React from 'react'
import DrawElement from '../../Utils/DrawElement'
import './Sidebar.css'

function Sidebar( { elements, dragStart, dragEnd, onRedo } ) {
  return (
    <div className='sidebar'>
        {elements.map(element => (
            <div
                className='sidebar_element'
                draggable
                onDragStart={dragStart}
                onDragEnd={dragEnd}
                key={element.id}
            >
                <DrawElement element={element}/>
            </div>
        ))}
        <button
            className='redo_button' 
            onClick={onRedo}>
            Redo
        </button>
    </div>
  )
}

export default Sidebar