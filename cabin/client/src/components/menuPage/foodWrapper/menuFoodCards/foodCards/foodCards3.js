import React from "react";
import './foodCards1.css';

const foodCards3 = props => (
    <div className="menu-list-food-cards-wrapper">
        <div className="menu-list-food-cards-name">{props.item.name}</div>
        <div className="menu-list-food-cards-price">Price: ${props.item.price1}</div>

        <div className="menu-list-food-cards-madeW-wrapper">
            <div className="menu-list-food-cards-madeW-3">Made With:</div>
            <div className="menu-list-food-cards-ingredients-3">{props.item.ingredients}</div>
        </div>

        <div className="menu-list-food-cards-included-wrapper">

        </div>

    </div>
);

export default foodCards3;