import React from 'react';
import {SocialNav, ThemeChanger} from '../../components'
import './style.css';
import Logo from '../../assets/Dayflow.png'

export default () => { 
    return (
        <>
            <ThemeChanger className='theme'/>
            <div className="home">
            <header>
                <div className="logo" ><img src={Logo} alt="me"/></div>
                <h1>Mónica <br></br> &emsp; Segarra</h1>
            </header>
            </div>
            <SocialNav/>
        </>
    );
}