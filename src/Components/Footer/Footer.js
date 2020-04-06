import React from 'react';
import Logo from '../../Image/Logo/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-style-copy">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="footer-top">
                            <img src={Logo} alt="" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h6>About Online food</h6>
                        <h6>Read our blog</h6>
                        <h6>Sign up to deliver</h6>
                        <h6>Add your restaurant</h6>
                    </div>
                    <div className="col-md-3">
                        <h6>Get help</h6>
                        <h6>Read FAQs</h6>
                        <h6>View All cities</h6>
                        <h6>Restaurant near me</h6>
                    </div>
                </div>
                <div className="row d-flex justify-content-between bottom-copy">
                    <div className="col-md-3">
                        <small>Copyrights 2020 Onion Food</small>
                    </div>
                    <div className="col-md-6 bottom-content">
                        <h6>Privacy Policy</h6>
                        <h6>terms of Use</h6>
                        <h6>Pricing</h6>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;