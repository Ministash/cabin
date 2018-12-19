import React from "react";
import "./menuDrinks.css";


let MenuDrinks = (props) => {
    let isItHotOrCold = "";
    if(props.temperature === 1){
        isItHotOrCold = "Hot";
    }else if(props.temperature === 2){
        isItHotOrCold = "Cold";
    }else if(props.temperature){
        isItHotOrCold = "Hot Or Cold"
    }

    return (
        <div className="menu-list-drink-item" key={props.i}>
            <div className="menu-list-drink-item-name">{props.name}</div>

            <div className="menu-list-drink-item-price-wrapper">
                <div className="menu-list-drink-item-price">S: ${props.price1}</div>
                <div className="menu-list-drink-item-price">M: ${props.price2}</div>
                <div className="menu-list-drink-item-price">L: ${props.price3}</div>
            </div>

            <div className="menu-list-drink-item-price-temperature-wrapper">
                <div className="menu-list-drink-item-price-temperature-served">Served:</div>
                <div className="menu-list-drink-item-price-temperature">{isItHotOrCold}</div>

            </div>
        </div>
    )
}


export default MenuDrinks;