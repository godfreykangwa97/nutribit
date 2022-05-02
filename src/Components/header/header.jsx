import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/site/nutribit.svg';
const Header = () => {
    /* Method that will fix header after a specific scrollable */
    const isSticky = (e) => {
        const header = document.querySelector('.header');
        const scrollTop = window.scrollY;
        scrollTop >= 100 ? header.classList.add('stickyHeader') : header.classList.remove('stickyHeader');
    };

    // Sticky Menu Area
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };
    return (
        <header className="header">
           <div className="header-holder wrapper flex space-between align-center">
              <Link to={`/`}><img src={Logo} className={`logo`} alt="Nutribit"/></Link>

               <div className="header-links-search">

                   <nav className={`navigation flex-inline align-center gap-2rem ${isActive ? "danger" : "SlideRight"}`}>
                       <Link to={`/`}>Home</Link>
                       <Link to={`/services`}>Services</Link>
                       <Link to={`/recipe`}>Recipes</Link>
                       <Link to={`/about`}>About</Link>
                   </nav>
                   <button className="btn icon-btn ToggleSidebar" onClick={handleToggle}><i className="fas fa-bars"/></button>
               </div>
           </div>
        </header>
    );
};
export default Header;