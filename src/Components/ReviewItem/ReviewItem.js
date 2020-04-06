import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {

    const { img, name, price, quantity,key } = props.cart;
    

    return (
        <div className="item-style d-flex justify-content-between align-items-center">
            <div className="imge-style">
                <img src={img} alt="" />
            </div>
            <div className="font-style">
                <p>{name}</p>
                <h5 style={{ color: 'red' }}>${price}</h5>
                <h5>Quantity: {quantity}</h5>
            </div>
            <div>
                <button onClick={()=>props.removeProduct(key)} className="btn btn-danger">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;