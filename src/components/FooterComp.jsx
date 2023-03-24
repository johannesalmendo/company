import React from 'react';
import sagaralogo from "../images/sagara-logo.png"

const FooterComp = () => {
    return (
        <footer>
            <div className='box-footer'>
                <div className='logo-footer'>
                    <img src={sagaralogo} alt="sagara logo" />
                </div>
                <div className='nav-footer'>
                    <ul>
                        <li>Home</li>
                        <li>Features</li>
                        <li>Company</li>
                        <li>Info</li>
                        <li>Partnership</li>
                    </ul>
                </div>
                <div className='switch-lang' >
                    <span>EN</span> | <span>ID</span>
                </div>
            </div>
        </footer>
    );
}

export default FooterComp;
