import React from 'react';

import logo from '../../images/logo.png'
import './Header.css'

const Header = (props) => {
    return (
        <div className="header">
            <div className="nav-bar">
                <nav className="container d-md-flex align-items-center text-center justify-content-between">
                    <div className="d-md-flex align-items-center text-center">
                        <img src={logo} alt="logo" />
                        <div>
                            <a href="/shop">Shop</a>
                            <a href="/review">Order Review</a>
                            <a href="/manage">Manage Inventory</a>
                        </div>
                    </div>
                    <div className="align-items-center">
                        <input type="text" placeholder="Search Product" onChange={props.handleSearch} />
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;