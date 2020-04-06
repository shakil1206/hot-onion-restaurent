import React from 'react';
import Logo from '../../Image/Logo/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import  { useAuth } from '../UseAuth/UseAuth';
import './Navigation.css';

const Navigation = () => {

    const auth = useAuth();
    //console.log(auth.user);
   


    return (
        <div>
            <nav className="navbar navbar-light bg-light col-md-12">
                <div className="container">
                    <a href="/" className="navbar-brand"><img src={Logo} alt="" /></a>
                    <div className="user-image">
                        {
                            auth.user ? <span>Wel: {auth.user.name} <img src={auth.user.photoURL} alt="" /> </span> : <span></span>
                        }
                        <a className="cart-style" href="/cart"><FontAwesomeIcon className="nav-right" icon={faCartPlus} /></a>

                        {
                            auth.user ? <a className="nav-right login" href="/login">Sign out</a>
                                : <a className="nav-right login" href="/login">Sign in</a>

                        }

                        <a href="/signup"><button className="btn btn-danger">Sign up</button></a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;