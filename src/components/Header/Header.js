import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../images/logo.png'
import './Header.css'

const Header = (props) => {
    return (
        <div className="header fixed-top-1">
            <div className="nav-bar">
                <nav className="container d-md-flex align-items-center text-center justify-content-between">
                    <div className="d-md-flex align-items-center text-center">
                        <img src={logo} alt="logo" />
                        <div>
                            <NavLink activeStyle={{
                                // fontWeight: "bold",
                                color: "#c4181d",
                                backgroundColor: 'rgb(235, 235, 235)'
                            }}
                                to="/home">Shop</NavLink>
                            <NavLink activeStyle={{
                                // fontWeight: "bold",
                                color: "#c4181d",
                                backgroundColor: 'rgb(235, 235, 235)'
                            }}
                                exact to="/review">Order Review</NavLink>
                            <NavLink activeStyle={{
                                // fontWeight: "bold",
                                color: "#c4181d",
                                backgroundColor: 'rgb(235, 235, 235)'
                            }}
                                to="/inventory">Manage Inventory</NavLink>
                        </div>
                    </div>
                    <div className="align-items-center">
                        {/* <input type="text" placeholder="Search Product" onChange={props.handleSearch} /> */}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;