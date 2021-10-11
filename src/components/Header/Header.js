import { faFingerprint, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'
import logo from '../../images/logo.png'
import userAvatar from '../../images/avatar.png'
import './Header.css'

const Header = (props) => {
    const { user, logOut } = useAuth();
    const showAlert = () => {
        !user.displayName && alert("Please Sign In to Proceed")
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <img src={logo} alt="logo" className="logo-img" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
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
                                exact to="/review" onClick={showAlert}>Order Review</NavLink>
                        </li>
                        <li>
                            <NavLink className="link-style" activeStyle={{
                                color: "#c4181d",
                                backgroundColor: 'rgba(255, 255, 255, 0.7)'
                            }}
                                to="/inventory" onClick={showAlert}>Manage Inventory</NavLink>
                        </li>
                    </ul>

                    {
                        user.displayName ?
                            <div className="d-flex align-items-center justify-content-center">
                                {user.photoURL ?
                                    <img src={user.photoURL} alt="" style={{ height: '35px', borderRadius: '50%' }} className="me-2" />
                                    :
                                    <img src={userAvatar} alt="" style={{ height: '35px', borderRadius: '50%' }} className="me-2" />}
                                <span className="fw-bold text-white">{user.displayName}</span>
                                <button className="btn btn-danger ms-2 btn-sm" onClick={logOut}>Logout</button>
                            </div>
                            :
                            <div className="d-flex justify-content-center">
                                <NavLink to="/signup" >
                                    <div className="btn btn-secondary me-2"><FontAwesomeIcon icon={faFingerprint} className="me-2" />Sign Up</div>
                                </NavLink>
                                <NavLink to="/login" >
                                    <div className="btn btn-secondary"><FontAwesomeIcon icon={faSignInAlt} className="me-2" />Log In</div>
                                </NavLink>
                            </div>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Header;