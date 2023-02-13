import { Navbutton } from '../Navbutton';
import { useState } from 'react';
import { Navmenu } from '../Navmenu';
import { Bigmenu } from '../Bigmenu';

import './style.css';

export const Navbar = () => {
    const [ navButtonClicked, setNavButtonClicked ] = useState(false);
    const [ navClass , setNavClass ] = useState('close');

    const handleScrollClick = (reference) => {
        if(!!reference) {
            reference.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const handleNavClick = (target) => {
        if(!navButtonClicked) {
            setNavClass('open');
        } else {     
            setNavClass('close');
        }

        if(target.nodeType === Node.ELEMENT_NODE) {
            handleScrollClick(target);
        }

        setNavButtonClicked(!navButtonClicked);
    }

    return (
        <div className="navbar">
            <span>Lar Nobre</span>
            <Bigmenu onclick={handleScrollClick}/>
            <Navbutton onClick={ handleNavClick } className={navClass}/>
            {!!navButtonClicked &&
                <Navmenu navClick={handleNavClick} className='navmenu' active={navButtonClicked}/>
            }        
        </div>
    );
}