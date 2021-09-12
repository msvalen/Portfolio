import React, { useState, useEffect } from 'react';
import './style.css'

function Modal( props) { //function Modal(props) {
    return (
        <div className='modal'>
            <div>
                <span onClick={props.destroy} className='cross'  style={{cursor: "pointer"}}>x</span>
                <div className='modalContent'>
                    {props.children}  
                </div>
            </div>
        </div>
    )
}
export default Modal