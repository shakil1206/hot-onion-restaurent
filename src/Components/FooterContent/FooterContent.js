import React from 'react';
import './FooterContent.css';
import img1 from '../../Image/Images/adult-blur-blurred-background-687824.png';
import img2 from '../../Image/Images/chef-cook-food-33614.png';
import img3 from '../../Image/Images/architecture-building-city-2047397.png';

const FooterContent = () => {
    return (
        <div>
            <div className="container content">
                <h1>Why you choose us</h1>
                <p>Arton waited twenty always repair in within we do. An delighted offering crusty<br/>mu is dagwood's at. Boy prosperous increasing surround.</p>
                <div className="card-deck">
                    <div className="card">
                        <img src={img1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Fast Delivery</h5>
                            <p className="card-text">Keep your system om sync with automated web hook based notification each time link is paid and how we dream about our future</p>
                            <p className="card-text"><a href="">See more-></a></p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={img2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">A Good Auto Responder</h5>
                            <p className="card-text">Keep your system om sync with automated web hook based notification each time link is paid and how we dream about our future.</p>
                            <p className="card-text"><a href="">See more-></a></p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={img3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Home Delivery</h5>
                            <p className="card-text">Keep your system om sync with automated web hook based notification each time link is paid and how we dream about our future.</p>
                            <p className="card-text"><a href="">See more-></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterContent;