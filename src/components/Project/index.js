import React, { useState, useEffect } from 'react';
import './style.css'

function Project(props) {

    function renderTags(){
        return props.tags.map((tag,i) => (<p key ={i}>{tag}</p>))
    }
    
    return (
        <div className='project' onClick={props.customClickEvent}>
            <div className='tags'>
                {renderTags()}
            </div>
            <h4>{props.title}</h4>
            <img src={props.img}/>
            <a href={props.repo}>
                <i className="fab fa-github-alt"></i>
            </a>
            <a href={props.deploy}>
                <i className="fa fa-external-link-alt"></i>
            </a>
            <p>{props.description}</p>
        </div>
    )
}

export default Project