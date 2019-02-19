import React from "react";
import './drinksCards1.css';

const drinksCards1 = props => (
    <div className="menu-list-drink-items">
        <div className="menu-list-drink-item-name">{props.item.name}</div>
        <div className="menu-list-drink-item-flavor">Flavor: {props.item.flavor}</div>
        <div className="menu-list-drink-item-informational-wrapper">
            <div className="menu-list-drink-item-price-wrapper-1">
                <div className="menu-list-drink-item-price">S: ${props.item.price1}</div>
                <div className="menu-list-drink-item-price">M: ${props.item.price2}</div>
                <div className="menu-list-drink-item-price">L: ${props.item.price3}</div>
            </div>

        </div>

    </div>
);

export default drinksCards1;