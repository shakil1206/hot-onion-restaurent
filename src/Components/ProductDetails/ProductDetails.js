import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { addToDatabaseCart } from '../../utilities/databaseManager';


const ProductDetails = () => {

    const { productkey } = useParams();

    const [product, setProduct] = useState(null);

    useEffect(() => {

        fetch(`https://quiet-earth-52235.herokuapp.com/product/${productkey}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })

    }, [])



    const [cart, setCart] = useState([]);

    const handleAddFood = (food) => {
        //console.log("Product Added", food);
        const newCart = [...cart, food];
        setCart(newCart);
        //Add product in local storage
        const sameFood = newCart.filter(pd => pd.key === food.key);
        const count = sameFood.length;

        addToDatabaseCart(food.key, count);


    }


    return (
        <div>
            <div className="container">
                {
                    product &&
                    <div className="row">
                        <div className="col-md-6 left-side" >
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <h3 className="btnStyle">$ {product.price}</h3>
                            <br />
                            <br />
                            <button onClick={() => handleAddFood(product)} className="btn btn-danger"><FontAwesomeIcon className="nav-right" icon={faCartPlus} />Add</button>
                            <br />
                            <br />
                            <img src={product.img} alt="" />
                        </div>
                        <div className="col-md-6 img-style">
                            <img src={product.img} alt="" />
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default ProductDetails;