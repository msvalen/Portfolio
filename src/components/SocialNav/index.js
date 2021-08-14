import React from 'react';
import './style.css';
//could do the icons separated as components
export default () => { 
    return (
        <nav className='socialNav'>
            <a href="https://github.com/msvalen"> <i className="fab fa-github fa-lg"></i></a>
            <a href="https://www.linkedin.com/in/monica-segarra-266149180/">
                <i className="fab fa-linkedin-in fa-lg"></i>
            </a>
            <a href="https://www.codewars.com/users/msvalen">
                <i className="codewars">\t</i>
            </a>
            <a href="https://open.spotify.com/playlist/4Y7gLWJ2Cth5oh1dkBPJav">
                <i className='spotify'>\t</i>
            </a>
        </nav>
    );
}