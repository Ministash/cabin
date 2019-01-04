import React from "react";
import './drinksCards1.css';


const drinksCards1 = props => (
    <div className="menu-list-drink-item-informational-wrapper">
        <div className="menu-list-drink-item-price-wrapper-1">
            <div className="menu-list-drink-item-price">S: ${props.price1}</div>
            <div className="menu-list-drink-item-price">M: ${props.price2}</div>
            <div className="menu-list-drink-item-price">L: ${props.price3}</div>
        </div>

    </div>
);

export default drinksCards1;