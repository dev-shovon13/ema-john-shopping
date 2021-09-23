import React from 'react';

import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="nav-bar">
                <nav className="container d-md-flex align-items-center text-center">
                    <img src={logo} alt="logo" />
                    <div>
                        <a href="/shop">Shop</a>
                        <a href="/review">Order Review</a>
                        <a href="/manage">Manage Inventory</a>
                    </div>

                </nav>
            </div>
        </div>
    );
};

export default Header;