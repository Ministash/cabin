import React from "react";
import './drinksCards3.css';


const drinksCards3 = props => (
    <div className="menu-list-drink-items-card-3">
        <div className="menu-list-drink-item-name">{props.item.name}</div>
        <div className="menu-list-drink-item-price-wrapper-card-3">
            <div className="menu-list-drink-item-price-card-3">Price: ${props.item.price1}</div>
        </div>
        <div className="menu-list-drink-item-description-wrapper-card-3">
            <div className="menu-list-drink-item-description-madeW-card-3">
                Made With:
                </div>
            <div className="menu-list-drink-item-description-card-3">
                {props.item.flavor}
            </div>
        </div>


    </div>
);

export default drinksCards3;