import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import login from '../../images/login.png'
import './LogIn.css'
import useAuth from '../../hooks/useAuth';

const LogIn = () => {
    const clickHandle = event => {
        event.preventDefault()
    }
    const { signInUsingGoogle, signInUsingGithub, error, setError } = useAuth()

    const location = useLocation()
    const history = useHistory()
    const redirect_URI = location.state?.from || '/home'

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_URI)
                setError('')
            }).catch((error) => {
                setError(error.message)
            })
    }
    const handleGithubLogIn = () => {
        signInUsingGithub()
            .then(result => {
                history.push(redirect_URI)
                setError('')
            }).catch((error) => {
                setError(error.message)
            })
    }
    return (
        <div className="log-in-bg pt-5 pb-4 text-center">
            <div className="container mb-5">
                <div className="top-margin"></div>
                <div className="bg-white rounded shadow p-5 pb-2 g-4 w-75 mx-auto log-sign">
                    <div className="row align-items-center">
                        <div className="login-form col-12 col-lg-6 pt-2 pt-lg-0">
                            <form className="" onSubmit={clickHandle}>
                                <h3 className="pb-3 text-secondary">Log In</h3>
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="User ID" />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" placeholder="Password" />
                                </div>
                                <div className="mb-3 text-start">
                                    <NavLink to="/login" className="text-decoration-none text-info">Forgot Password ?</NavLink>
                                </div>
                                <button className="btn btn-primary w-100"><FontAwesomeIcon icon={faSignInAlt} className="me-2" />Log In</button>
                                <div className="text-danger fw-bold fs-6">{error}</div>
                            </form>
                            <div className="border-top mt-2">
                                <p className="my-0 text-secondary">or</p>
                                <div className="d-flex gap-2 justify-content-center">
                                    <button onClick={handleGoogleLogIn} className="btn btn-secondary btn-sm my-2"><FontAwesomeIcon icon={faGoogle} className="me-2" />Login With Google</button>
                                    <button onClick={handleGithubLogIn} className="btn btn-secondary btn-sm my-2"><FontAwesomeIcon icon={faGithub} className="me-2" />Login With Github</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 login-img">
                            <img src={login} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <p className="text-secondary pt-3">New Member ? <NavLink to="/signup" className="text-decoration-none"><span className="text-info fw-bold">Register</span></NavLink></p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;