import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../Assets/site/nutribit.svg';

const Footer = () => {
    return(
        <footer className="footer">
            <div className="wrapper">
                <div className="grid-2 top-down-4">
                    <div className="footer-logo-holder flex justify-center align-center">
                        <img src={Logo} alt="Nutribit"/>
                    </div>
                    <div className="flex space-between">
                        <div className="quick flex-inline flex-column gap-2rem">
                            <h3>Quick</h3>
                            <Link to="/">Home</Link>
                            <Link to="/services">Services</Link>
                            <Link to="/recipes">Recipes</Link>
                        </div>
                        <div className="quick flex-inline flex-column gap-2rem">
                            <h3>Information</h3>
                            <Link to="/about">About</Link>
                            <Link to="/">FQAs</Link>
                        </div>
                    </div>
                </div>
                <div className="closing text-center p-10">
                    <h5>&copy; 2022 <a href="https://www.facebook.com/emitartscreatives" target="_blank" className="color-main">Emit Arts & Creatives</a></h5>
                    <p>BN No: 320220042911</p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;