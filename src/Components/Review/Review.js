import React, { useState, useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import './Review.css';
import ReviewItem from '../ReviewItem/ReviewItem';
import { Link } from 'react-router-dom';
import { useAuth } from '../UseAuth/UseAuth';
import { useForm } from 'react-hook-form';

const Review = () => {
    const auth = useAuth();
    const { register, handleSubmit, errors } = useForm();


    const onSubmit = (data) => {
        console.log(auth.user.email, auth.user.name);

        const savedCart = getDatabaseCart();
        const orderDetail = { email: auth.user.email, cart: savedCart };
        fetch('http://localhost:4200/placeOrder', {
            method: 'POST',
            body: JSON.stringify(orderDetail),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log("Order Placed");
            })
    }

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


        fetch('http://localhost:4200/getProductsByKey', {
            method: 'POST',
            body: JSON.stringify(productKeys),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(foods => {
                const cartProducts = productKeys.map(key => {
                    const product = foods.find(pd => pd.key === key);
                    product.quantity = savedCart[key];
                    return product;
                });
                setCart(cartProducts);
            })

    }, [])

    return (
        <div>

            <div className="container">
                <div className="row st">
                    <div className="col-md-6">
                        <h3 style={{ textAlign: 'left', marginTop: '40px' }}>Edit Delivery Details</h3>
                        <hr></hr>

                        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                            <input className="form-control" name="name" ref={register({ required: true })} placeholder="Name" />
                            {errors.name && <span className="error">Name is required</span>}
                            <br />
                            <input className="form-control" name="email" ref={register({ required: true })} placeholder="Email" />
                            {errors.email && <span className="error">Email is required</span>}
                            <br />
                            <input className="form-control" name="addressLine1" ref={register({ required: true })} placeholder="Address Line1" />
                            {errors.addressLine1 && <span className="error">Address is required</span>}
                            <br />
                            <input className="form-control" name="addressLine2" ref={register} placeholder="Address Line2" />
                            <br />
                            <input className="form-control" name="city" ref={register({ required: true })} placeholder="City" />
                            {errors.city && <span className="error">City is required</span>}
                            <br />
                            <input className="form-control" name="country" ref={register({ required: true })} placeholder="Country" />
                            {errors.country && <span className="error">Country is required</span>}
                            <br />
                            <input className="form-control" name="zipcode" ref={register({ required: true })} placeholder="Zip Code" />
                            {errors.zipcode && <span className="error">Zipcode is required</span>}
                            <br />
                            <input className="form-control btn btn-danger" type="submit" value="Save And Continue" />
                        </form>

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

                            <Link to="/orderComplited">
                                {
                                    auth.user ? <button className="btn btn-danger form-control">Place Order</button>
                                        : <button className="btn btn-danger form-control">Log in First!</button>
                                }
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Review;