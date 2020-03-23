import React from 'react';
import './Header.css';
import Logo from '../../Image/Logo/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Banner from '../../Image/Logo/bannerbackground.png';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light col-md-12">
                <a className="navbar-brand"><img src={Logo} alt="" /></a>
                <div>
                    <FontAwesomeIcon className="nav-right" icon={faCartPlus} />
                    <a className="nav-right login" href="/login">Login</a>
                    <button className="btn btn-danger">Sign up</button>
                </div>
            </nav>

            <div className="row banner">
                <div className="col-md-12">
                    <h1>Best food waiting for your belly!</h1>
                    <div className="input-form">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Search Food Items" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <div className="input-group-append">
                                <button className="btn btn-danger" type="button" id="button-addon2">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="bottom-nav">
                <a onClick={} href="/breakfast">Breakfast</a>
                <a href="/lunch">Lunch</a>
                <a href="/dinner">Dinner</a>  
                
                        
            </nav>


        </div>
    );
};

export default Header;