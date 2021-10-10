import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFingerprint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SignUp.css'
import signup from '../../images/signup.png'
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {
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
        <div className="sign-up-bg pt-2 pb-2 text-center">
            <div className="top-margin"></div>
            <div className="container mb-3">
                <div className="bg-white rounded shadow p-4 pb-2 g-4 w-75 mx-auto log-sign">
                    <div className="row  align-items-center">
                        <div className="col-12 col-lg-6">
                            <img src={signup} alt="" className="img-fluid" />
                        </div>
                        <div className="col-12 col-lg-6">
                            <form className="" onSubmit={clickHandle}>
                                <h3 className="pb-3 text-secondary">Sign Up</h3>
                                <div className="mb-3 d-flex ">
                                    <input type="text" className="form-control me-3" placeholder="First Name" />
                                    <input type="text" className="form-control" placeholder="Last Name" />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" placeholder="Enter Your Email" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="User ID" />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" placeholder="Password" />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" placeholder="Confirm Password" />
                                </div>
                                <div className="mb-3 form-check text-start">
                                    <input type="checkbox" className="form-check-input" />
                                    <label className="form-check-label text-secondary">I accept the <NavLink to="/signup" className="text-decoration-none text-info">Terms of Use</NavLink> & <NavLink to="/signup" className="text-decoration-none text-info">Privacy Policy</NavLink></label>
                                </div>
                                <button onClick={clickHandle} className="btn btn-primary w-100"><FontAwesomeIcon icon={faFingerprint} className="me-2" />Submit</button>
                                <div className="text-danger fw-bold fs-6">{error}</div>
                            </form>
                            <div className="border-top mt-2">
                                <p className="my-0 text-secondary">or</p>
                                <div className="d-flex gap-2 justify-content-center">
                                    <button className="btn btn-secondary btn-sm my-2" onClick={handleGoogleLogIn}><FontAwesomeIcon icon={faGoogle} className="me-2" />Login With Google</button>
                                    <button className="btn btn-secondary btn-sm my-2" onClick={handleGithubLogIn}><FontAwesomeIcon icon={faGithub} className="me-2" />Login With Github</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-secondary pt-2">Already have an Account ? <NavLink to="/login" className="text-decoration-none"><span className="text-info fw-bold">Log In</span></NavLink></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;