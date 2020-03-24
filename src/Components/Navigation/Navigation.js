import React from 'react';
import Logo from '../../Image/Logo/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light col-md-12">
                <div className="container">
                    <a href="/" className="navbar-brand"><img src={Logo} alt="" /></a>
                    <div>
                        <a className="cart-style" href="/cart">1<FontAwesomeIcon className="nav-right" icon={faCartPlus} /></a>
                        <a className="nav-right login" href="/login">Login</a>
                        <a href="/signup"><button className="btn btn-danger">Sign up</button></a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;