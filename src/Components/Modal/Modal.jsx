import React, { useEffect, useState } from 'react'
import './Modal.css'

function Modal({setIsOpen, handleSubmit, initalStyle}) {

    const [style, setStyle] = useState(initalStyle)

    const handleOpen = () => {
        setIsOpen(false);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit();
    }

    const handleChange = (e) => {
        const { name, value} = e.target;
        setStyle({...style, [name] : value});
    }

    return (
        <div className='modal_container'>
        <form className='modal_form'>
            <div>
                <label>Width</label>
                <input 
                    name='width'
                    value={style ? style.width : ''}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Height</label>
                <input 
                    name='height'
                    value={style ? style.height : ''}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Placeholder</label>
                <input 
                    name='placeholder'
                    value={style ? style.placeholder : ''}
                    onChange={handleChange}
                />
            </div>
            
            <button
                type='submit'
                onSubmit={onSubmit}
            >
                Sumbit
            </button>
        </form>

        <button
            onClick={() => {handleOpen(false)}}
        >
            Close
        </button>
        </div>
    )
}

export default Modal