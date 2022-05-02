import React from 'react';

const About = () => {
    return (
        <div className="about">
            <div className="about-wrapper top-down-4">
                <div className="wrapper">
                    <div className="about-opening text-left">
                        <h1 className="orange">About</h1>
                        <p>This website is been designed and developed by Emit Arts & Creatives, a multi-media company based in Lusaka, zambia.</p>
                        <p>Emit Arts & Creatives is also responsible for the brand and maintenance of the website including marketing and content management, that includes: facebook, instagram, twitter and google business.</p>
                    </div>
                </div>
            </div>

            <div className="core-values top-down-4">
                <div className="wrapper">
                    <div className="text-right">
                        <h1>Get in touch with us</h1>
                    </div>
                    <div className="top-down-4 text-right">
                        <ul>
                            <li><span>303/20, Chifundo, Chawama, Lusaka, Zambia</span><i className="fas fa-map-marker margin-left-20 color-main"/></li>
                            <li><span>+260 972 338 115</span><i className="fas fa-phone margin-left-20 color-main"/></li>
                            <li><span>emitartcreatives@gmail.com</span><i className="fas fa-envelope margin-left-20 color-main"/></li>
                        </ul>
                    </div>
                    <div className="follow top-down-4">
                        <div className="opening text-left">
                            <h4>Follow us</h4>
                        </div>
                        <ul className="flex flex-row space-between align-items-center margin-top">
                            <li><a href="https://www.facebook.com/emitartscreatives" target="_blank"><i className="fab fa-facebook"/></a></li>
                            <li><a href="https://www.instagram.com/emitartscreatives/" target="_blank"><i className="fab fa-instagram"/></a></li>
                            <li><a href="https://wa.me/message/4AFGIY3CBANUB1" target="_blank"><i className="fab fa-whatsapp"/></a></li>
                            <li><a href="https://g.page/r/CYIZenPD3iDoEAE" target="_blank"><i className="fab fa-google"/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;