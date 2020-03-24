import React, { useState, useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import './Review.css';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {

    const [cart, setCart] = useState([]);

    const removeProduct = (productKey) => {
        //Remove from database cart
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);

        removeFromDatabaseCart(productKey);

    }


    //Calculating product price
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;

    }

    let tax = 0;
    if (total > 100) {
        tax = (total / 100) * 5;
    }

    //Delivary Fee
    let deliverFee = 0;
    if (total < 20) {
        deliverFee = 0;
    } else if (total < 50) {
        deliverFee = 3;
    } else if (total < 100) {
        deliverFee = 5;
    } else if (total < 200) {
        deliverFee = 10;
    } else {
        deliverFee = 20;
    }

    let GrandTotal = total + tax + deliverFee;




    useEffect(() => {

        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);

    }, [])

    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3 style={{ textAlign: 'left', marginTop: '40px' }}>Edit Delivery Details</h3>
                        <hr></hr>

                        <input className="form-control" type="text" placeholder="Delivery to Door" />
                        <br />
                        <input className="form-control" type="text" placeholder="Flat and Road No" />
                        <br />
                        <input className="form-control" type="text" placeholder="District" />
                        <br />
                        <input className="form-control" type="text" placeholder="Bussiness Name" />
                        <br />
                        <input className="form-control" type="text" placeholder="Add Delivery Instructor" />
                        <br />

                        <button className="btn btn-danger form-control">Save And Continue</button>
                    </div>
                    <div className="form-control" className="col-md-6">

                        <h3 style={{ textAlign: 'center', marginTop: '40px' }}>Your Choocen Product</h3>
                        <hr></hr>
                        <div className="review-cart">
                            <p>From: <strong>Gulshan Plaza Restaurent GPR</strong></p>
                            <p>Arriving 20 - 30 min</p>
                            <p>107 Rd No 8</p>

                            {
                                cart.map(pd => <ReviewItem
                                    removeProduct={removeProduct}
                                    key={pd.key}
                                    cart={pd}></ReviewItem>)
                            }
                            <div className="price-styled d-flex justify-content-between">
                                <div>
                                    <h5>Sub Total:</h5>
                                    <h5>Tax:</h5>
                                    <h5>Delivery Fee:</h5>
                                    <h5>Total:</h5>
                                </div>
                                <div>
                                    <h5>{total.toFixed(2)}</h5>
                                    <h5>{tax.toFixed(2)}</h5>
                                    <h5>{deliverFee.toFixed(2)}</h5>
                                    <h5>{GrandTotal.toFixed(2)}</h5>
                                </div>
                            </div>

                            <button className="btn btn-danger form-control">Place Order</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Review;