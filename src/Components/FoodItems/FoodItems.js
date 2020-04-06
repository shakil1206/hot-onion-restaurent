import React from 'react';
import './FoodItems.css';
import { Link } from 'react-router-dom';

const FoodItems = (props) => {

    //console.log(props);
    const { img, name, title, price, key } = props.item;

 

    return (

        <div className="col-md-4">
            <div className="card-deck card-style">
                <div className="card">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h6 className="card-title"><Link to={"/food/" + key}>{name}</Link></h6>
                        <p className="card-text">{title}</p>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <h6 className="text-muted">${price}</h6>
                        <button onClick={() => props.handleAddFood(props.item)} className="btn btn-danger">Buy</button>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default FoodItems;