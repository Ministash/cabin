import React from "react";
import './menuTextCard.css';


const menuDrinkText = props => (
    <div id="menu-list-drink-information-box">
        <div className="menu-list-drink-item-name">How They Are Made: {props.menuTextName}</div>
        <div className="menu-list-drink-item-information-text-wrapper-coffee">
            {props.information}
        </div>
    </div>
);

export default menuDrinkText;