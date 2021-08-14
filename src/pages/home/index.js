import React from 'react';
import {SocialNav, ThemeChanger} from '../../components'
import './style.css';

export default () => { 
    return (
        <>
            <ThemeChanger className='theme'/>
            <div className="home">
            <header>
                <div className="logo" ><img src="../../assets/Dayflow.png" alt="me"/></div>
                <h1>Mónica <br></br> &emsp; Segarra</h1>
            </header>
            </div>
            <SocialNav/>
        </>
    );
}