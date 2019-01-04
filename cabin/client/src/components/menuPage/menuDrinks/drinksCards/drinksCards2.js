import React from "react";
import './drinksCards2.css';


const drinksCards2 = props => (
    <div className="menu-list-drink-item-informational-wrapper-coffee">
    <div className="menu-list-drink-item-price-wrapper-coffee">
        <div className="menu-list-drink-item-price-coffee">S: ${props.price1}</div>
        <div className="menu-list-drink-item-price-coffee">M: ${props.price2}</div>
        <div className="menu-list-drink-item-price-coffee">L: ${props.price3}</div>
    </div>

    <div className="menu-list-drink-item-price-temperature-wrapper-coffee">

        <div className="menu-list-drink-item-price-temperature-served-coffee">Served:

            <div className="menu-list-drink-item-price-temperature-coffee">Hot or Cold</div>

        </div>

    </div>

</div>
);

export default drinksCards2;