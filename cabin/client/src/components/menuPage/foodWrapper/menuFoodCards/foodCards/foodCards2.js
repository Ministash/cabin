import React from "react";
import './foodCards1.css';

const foodCards2 = props => (
    <div className="menu-list-food-cards-wrapper-floater">
        <div className="menu-list-food-cards-wrapper-2">
            <div className="menu-list-food-cards-name">{props.item.name}</div>
            <div className="menu-list-food-cards-price-2">Price: ${props.item.price1}</div>
            <div className="menu-list-food-cards-madeW">Made With:</div>
            <div className="menu-list-food-cards-ingredients">{props.item.ingredients}</div>

        </div>
    </div>

);

export default foodCards2;