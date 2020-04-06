import React from 'react';
import './OrderComplited.css';
import map from '../../Image/Images/map.PNG';
import logo from '../../Image/Images/Group 1151.png';
import logo2 from '../../Image/Images/Group 1152.png';

const OrderComplited = () => {

    return (
        <div>
            <div className="container">
                <div className="row order">
                    <div className="col-md-8">
                        <img src={map} alt="" />
                        <br />

                    </div>
                    <div className="col-md-4">
                        <div className="shipment">
                            <img className="images2" src={logo} alt="" />
                            <div className="location">
                                <li>Your Location</li>
                                <p>107, Rd No 8</p>
                                <li>Shop Address</li>
                                <p>Gulshan Plaza Resturent GPR</p>
                            </div>
                            <h1>09:30</h1>
                            <p>Estimated delivery time</p>

                            <div className="raider">
                                <div>
                                    <img className="images" src={logo2} alt="" />
                                </div>
                                <div>
                                    <h4>Hamim</h4>
                                    <p>Your raider</p>
                                </div>
                            </div>
                            <button className="btn btn-danger form-control">Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderComplited;