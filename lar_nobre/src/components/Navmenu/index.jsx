import { useState } from 'react';
import './style.css';

export const Navmenu = ({ active, className, navClick}) => {
    
    const [ navmenuActive ] = useState(active);
    const navMenuClass = !!navmenuActive && 'slide-in';
    const homeRef = document.getElementById('home');
    const aboutRef = document.getElementById('about');
    const servicesRef = document.getElementById('services');
    const contactRef = document.getElementById('contact');

    return (
    <div className={`${navMenuClass} ${className}`}>
        <ul>
            <li onClick={() => navClick(homeRef)}>Home</li>
            <li onClick={() => navClick(aboutRef)}>Sobre</li>
            <li onClick={() => navClick(servicesRef)}>Serviços</li>
            <li onClick={() => navClick(contactRef)}>Contato</li>
        </ul>
    </div>
    )
}