import React from "react";
import './menuTextCard.css';


const menuDrinkText = props => (
    <div className="menu-list-drink-information-box">
        <div className="menu-list-drink-item-name">How They Are Made</div>
        <div className="menu-list-drink-item-information-text-wrapper-coffee">
            {props.information}
        </div>
    </div>
);

export default menuDrinkText;