import React, { useState, useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, clearLocalShopingCart } from '../../utilities/databaseManager';
import './Review.css';
import ReviewItem from '../ReviewItem/ReviewItem';
import { Link } from 'react-router-dom';
import { useAuth } from '../UseAuth/UseAuth';
import { useForm } from 'react-hook-form';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';



const Review = () => {
    const auth = useAuth();
    const { register, handleSubmit, errors } = useForm();

    const stripePromise = loadStripe('pk_test_ubopnwj9basezWfBovYMu2MN00zSxpuU6i');

    //For set Form Visible Left side
    const [formVisible, setFormVisible] = useState(true);

    //for hide Oreder review and show payment method
    const [shipInfoAdded, setShipInfoAdded] = useState(null);

    //Visible Process order button
    const [processOrder, setProcessOrder] = useState(false);

    //Load data from input field
    const [orderInfo, setOrderInfo] = useState(null);


    //Get Order Id
    const [orderId, setOrderId] = useState(null);



    //Process order button visible method
    const handleProcessOrder = () => {
        setProcessOrder(true);
    }


    const onSubmit = (data) => {
        setFormVisible(false);
        setOrderInfo(data);

    }

    const placeOrder = (payment) => {

        const savedCart = getDatabaseCart();
        const orderDetail = {
            email: auth.user.email,
            cart: savedCart,
            shifpment: orderInfo,
            payment: payment

        };
        fetch('https://quiet-earth-52235.herokuapp.com/placeOrder', {
            method: 'POST',
            body: JSON.stringify(orderDetail),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(data => {
                // console.log("Order Placed");
                clearLocalShopingCart();
                setOrderId(data._id);

            })
    }

    const [cart, setCart] = useState([]);

    //Method visible Payment mehthod
    const handlePlaceOrder = () => {
        setShipInfoAdded(true)
    }


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


        fetch('https://quiet-earth-52235.herokuapp.com/getProductsByKey', {
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

                        {
                            formVisible ? <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                                <p>Please Login first! then fill up your information!</p>
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
                                : <h3>Your Information has been saved. <br /> Now click on Place Order!</h3>


                        }




                    </div>
                    <div className="form-control" className="col-md-6">

                        <div style={{ display: shipInfoAdded && 'none' }}>
                            <h3 style={{ textAlign: 'center', marginTop: '40px' }}>Your Choocen Product</h3>
                            <hr></hr>
                            <p>After login Please fill up Your Information first!</p>

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

                                {
                                    auth.user ? <button onClick={handlePlaceOrder} disabled={cart.length === 0} className="btn btn-danger form-control">Place Order</button>
                                        : <button className="btn btn-danger form-control">Log in First!</button>
                                }



                            </div>
                        </div>

                        <div style={{ display: shipInfoAdded ? 'block' : 'none' }}>
                            <h3 style={{ textAlign: 'center', marginTop: '40px' }}>Add Your Payment method</h3>
                            <hr></hr>
                            <Elements stripe={stripePromise}>
                                <CheckoutForm handleProcessOrder={handleProcessOrder} placeOrder={placeOrder} ></CheckoutForm>
                            </Elements>

                            {
                                orderId && <div>
                                    <h2>Thank you for shoping with us!</h2>
                                    <h3>Your Order Id is: {orderId}</h3>
                                </div>
                            }

                            <div style={{ display: processOrder ? 'block' : 'none' }}>
                                <Link to="/orderComplited">
                                    <button className="btn btn-danger form-control">Process Order</button>
                                </Link>
                            </div>


                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Review;