import React from "react";
import './foodCards1.css';

const foodCards1 = props => (
    <div className="menu-list-food-cards-wrapper">
        <div className="menu-list-food-cards-name">{props.item.name}</div>
        <div className="menu-list-food-cards-price">Price: ${props.item.price1}</div>
        <div className="menu-list-food-cards-madeW">Made With:</div>
        <div className="menu-list-food-cards-ingredients">{props.item.ingredients}</div>

    </div>
);

export default foodCards1;