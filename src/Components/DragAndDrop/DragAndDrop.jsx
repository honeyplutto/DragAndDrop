import React, { useState } from 'react'
import DropContainer from '../DropContainer/DropContainer'
import Sidebar from '../Sidebar/Sidebar'
import { initalElements } from '../../Utils/initalElements'
import { matrix } from '../../Utils/matrix'
import './DragAndDrop.css'

function DragAndDrop() {

    const [elements] = useState(initalElements);
    const [dragElement, setDragElement] = useState('');
    const [item, setItem] = useState({});
    const [dropElement, setDropElement] = useState(matrix);
    const [dropLastElement, setDropLastElement] = useState(-1);
    const [draggable, setDraggable] = useState(false);
    const [isOver, setIsOver] = useState(false);

    const dragStart = (e) => {
        e.stopPropagation();
        setDragElement(e.target.children[0]);

        setItem({
            name: e.target.children[0].children[0].localName, 
            type: e.target.children[0].children[0].innerText.toLowerCase()
        });
        setDraggable(!!true);
    }

    const dragEnd = (e) => {
        e.stopPropagation(); 
    }

    const dragOver = (e) => {
        e.preventDefault();
        e.stopPropagation(); 
    }

    const addElement = (e, index) => {
        e.preventDefault();
        e.stopPropagation();
        const dropElements = [...dropElement];

        for(let i = 0; i < dropElements.length; i++) {
            if(i === index){
                dropElements[i] = {
                    id: index, 
                    name: item.name, 
                    type: item.type
                }
            } else if(  i === index - 1 || 
                        i === index + 1 || 
                        i === index - 5 || 
                        i === index + 5 ) 
                    {
                        if(dropElements[i] === 0){
                            dropElements[i] = 1
                        }                
                    }
        }
        setDropElement(dropElements);
        setDropLastElement(index);
    };

    const onRedo = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const dropElements = [...dropElement]

        for(let i = 0; i < dropElements.length; i++){
            if(i === dropLastElement){
                dropElements[i] = 1
            } else if(  (i === dropLastElement - 1 || 
                        i === dropLastElement + 1 ||
                        i === dropLastElement - 5 ||
                        i === dropLastElement + 5) && (dropElements[i] === 1)
            ) dropElements[i]= 0
        }
        setDropElement(dropElements);
    }

    return (
        <div className='main_container'>
            <Sidebar 
                elements = { elements }
                dragStart = { dragStart }
                dragEnd = { dragEnd }
                onRedo = { onRedo }
            />
            <DropContainer 
                addElement = { addElement }
                dragOver = { dragOver }
                dropElement = { dropElement }
                draggble = {draggable}
            />
        </div>
    );
}

export default DragAndDrop