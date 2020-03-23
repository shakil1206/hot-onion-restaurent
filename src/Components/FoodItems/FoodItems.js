import React from 'react';
import './FoodItems.css';

const FoodItems = (props) => {

    const { img, name, title, price } = props.item;
    return (

        <div className="col-md-4">
            <div className="card-deck card-style">
                <div className="card">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h6 className="card-title">{name}</h6>
                        <p className="card-text">{title}</p>
                    </div>
                    <div className="card-footer">
                        <h6 className="text-muted">${price}</h6>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default FoodItems;