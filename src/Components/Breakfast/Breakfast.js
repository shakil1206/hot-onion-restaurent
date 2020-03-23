import React, { useState } from 'react';
import fakeData from '../../fakeData';
import FoodItems from '../FoodItems/FoodItems';

const Breakfast = () => {


    const [foods, setFoods] = useState(fakeData);
    const [breakfast, setbreakfast] = useState([]);

    
    const foodItems = foods.filter(food=> food.category==="breakfast");

    return (
        <div>


            <div className="container">
                <div className="row">
                    {
                       foods.map(food => <FoodItems key={food.key} item={food}></FoodItems>)
                    }
                </div>
            </div>



        </div>
    );
};

export default Breakfast;