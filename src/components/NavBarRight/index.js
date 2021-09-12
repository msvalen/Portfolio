import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

export default () => { 
    return (
        <nav className='primari-nav'>
            <ul>
                <li><NavLink activeClassName='current' exact to="/">Home</NavLink></li>
                {/*<li><NavLink activeClassName="current" to='/about'>About</NavLink></li>*/}
                <li><NavLink activeClassName="current" to="/projects">Projects</NavLink></li>
            </ul>
        </nav>
    );
}