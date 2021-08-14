import React, {useState, useContext} from 'react';
import './style.css';

const ThemeContext = React.createContext();

export function useTheme(){
    return useContext(ThemeContext)
}

export function ThemeProvider({ children }){
    const [ current, setCurrent ] = useState({
        color:'light',
        icon:'fa-sun',
    });

    const list = [
        {
            color: 'light',
            icon: 'fa-sun'
        },
        {
            color:'dark',
            icon:'fa-moon',
        },
        {
            color:'sepia',
            icon: 'fa-camera-retro'
        },
        {
            color:'nyan',
            icon: 'fa-cat'
        }]

    const select = (themeName) =>setCurrent(themeName);

    return (
        <ThemeContext.Provider value={{ list, select, current }} >
            { children }
        </ThemeContext.Provider>
    )
}