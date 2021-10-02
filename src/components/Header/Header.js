import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../images/logo.png'
import './Header.css'

const Header = (props) => {
    return (
        // <div className="header fixed-top-1">
        //     <div className="nav-bar">
        //         <nav className="container d-md-flex align-items-center text-center justify-content-between">
        //             <div className="d-md-flex align-items-center text-center">
        //                 <img src={logo} alt="logo" />
        //                 <div>
        //                     <NavLink activeStyle={{
        //                         // fontWeight: "bold",
        //                         color: "#c4181d",
        //                         backgroundColor: 'rgb(235, 235, 235)'
        //                     }}
        //                         to="/home">Shop</NavLink>
        //                     <NavLink activeStyle={{
        //                         // fontWeight: "bold",
        //                         color: "#c4181d",
        //                         backgroundColor: 'rgb(235, 235, 235)'
        //                     }}
        //                         exact to="/review">Order Review</NavLink>
        //                     <NavLink activeStyle={{
        //                         // fontWeight: "bold",
        //                         color: "#c4181d",
        //                         backgroundColor: 'rgb(235, 235, 235)'
        //                     }}
        //                         to="/inventory">Manage Inventory</NavLink>
        //                 </div>
        //             </div>
        //             <div className="align-items-center">
        //                 {/* <input type="text" placeholder="Search Product" onChange={props.handleSearch} /> */}
        //             </div>
        //         </nav>
        //     </div>
        // </div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top-1">
            <div className="container">
                <img src={logo} alt="logo" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li>
                            <NavLink className="link-style" activeStyle={{
                                color: "#c4181d",
                                backgroundColor: 'rgba(255, 255, 255, 0.7)'
                            }}
                                to="/home">Shop</NavLink>
                        </li>
                        <li>
                            <NavLink className="link-style" activeStyle={{
                                color: "#c4181d",
                                backgroundColor: 'rgba(255, 255, 255, 0.7)'
                            }}
                                exact to="/review">Order Review</NavLink>
                        </li>
                        <li>
                            <NavLink className="link-style" activeStyle={{
                                color: "#c4181d",
                                backgroundColor: 'rgba(255, 255, 255, 0.7)'
                            }}
                                to="/inventory">Manage Inventory</NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;