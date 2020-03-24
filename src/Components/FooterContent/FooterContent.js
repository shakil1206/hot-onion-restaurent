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
                <div class="card-deck">
                    <div class="card">
                        <img src={img1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Fast Delivery</h5>
                            <p class="card-text">Keep your system om sync with automated web hook based notification each time link is paid and how we dream about our future</p>
                            <p class="card-text"><a href="">See more-></a></p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={img2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">A Good Auto Responder</h5>
                            <p class="card-text">Keep your system om sync with automated web hook based notification each time link is paid and how we dream about our future.</p>
                            <p class="card-text"><a href="">See more-></a></p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={img3} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Home Delivery</h5>
                            <p class="card-text">Keep your system om sync with automated web hook based notification each time link is paid and how we dream about our future.</p>
                            <p class="card-text"><a href="">See more-></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterContent;