import { useState } from 'react';
import './style.css';

export const Navmenu = ({ active, className, navClick}) => {
    
    const [ navmenuActive ] = useState(active);
    const navMenuClass = !!navmenuActive && 'slide-in';

    return (
    <div className={`${navMenuClass} ${className}`}>
        <ul>
            <li onClick={() => navClick('home')}>Home</li>
            <li onClick={() => navClick('about')}>Sobre</li>
            <li onClick={() => navClick('services')}>Serviços</li>
            <li onClick={() => navClick('contact')}>Contato</li>
        </ul>
    </div>
    )
}