import React from 'react';

import Logo from '../../assets/logo.png';

const Footer = () => (
    <footer>
        <div className="footer container">
            <img src={Logo} alt="logo" />
            <span>©Eclectees Co Ltd. 2019</span>
            <div className="footer__links">
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
                <span>Contact Us</span>
            </div>
        </div>
    </footer>
);

export default Footer;