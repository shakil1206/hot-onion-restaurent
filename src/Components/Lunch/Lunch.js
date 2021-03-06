import React, { useState, useEffect } from 'react';
import FoodItems from '../FoodItems/FoodItems';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const Lunch = () => {

    const [foods, setFoods] = useState([]);

    useEffect(() => {

        fetch('https://quiet-earth-52235.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setFoods(data);
            })

    }, [])
    
    
    const foodItems = foods.filter(food=> food.category==="lunch");


    const [cart, setCart] = useState([]);

    const handleAddFood =(food)=>{
        //console.log("Product Added", food);

        const newCart = [...cart, food];
            setCart(newCart);
            //Add product in local storage
            const sameFood = newCart.filter(pd=>pd.key === food.key);
            const count = sameFood.length;

            addToDatabaseCart(food.key, count);
        
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                       foodItems.map(food => <FoodItems handleAddFood={handleAddFood} key={food.key} item={food}></FoodItems>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Lunch;