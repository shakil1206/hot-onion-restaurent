import React, { useState } from 'react';
import './Header.css';


const Header = (props) => {

    return (
        <div >            
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

                <a href="/breakfast">Breakfast</a>
                <a href="/lunch">Lunch</a>
                <a href="/dinner">Dinner</a>
            </nav>



        </div>
    );
};

export default Header;