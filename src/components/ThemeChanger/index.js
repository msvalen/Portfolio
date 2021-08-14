import { Hidden } from '@material-ui/core';
import React, { useState } from 'react';
import { useTheme } from '../../context/Theme';
import style from './style.css'

const ThemeChanger = () => {
    const theme = useTheme();
    const [hide, setHide ]= useState('hidden');
    
    const renderThemeNav = (data) => {
        return data.map((p,i) => {
            return(
            <label key={i} >
                <i className={"fas "+p.icon}></i>
                <input type='radio' name='theme' value={p.color} checked={p == theme.current} onChange={()=>theme.select(p)} />
            </label>
            )
        })
    }
    const toggleMenu = () => {
       (hide)? setHide(''): setHide('hidden');
    }
    return (
        <div className='themeChanger'>
            <span id="hide" onClick={toggleMenu}><i className={"fas "+theme.current.icon}></i></span>
            <div className = {'menu '+ hide}>
                    {renderThemeNav(theme.list)}
            </div>
            
        </div>
    )
}
export default ThemeChanger;