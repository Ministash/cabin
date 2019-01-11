import React from "react";


const menuTextFoodCard1 = props => (
    <div id="menu-list-drink-information-box">
        <div className="menu-list-drink-item-name">How They Are Made: {props.menuTextName}</div>
        <div className="menu-list-drink-item-information-text-wrapper-coffee">
            {props.information}
        </div>
    </div>
);

export default menuTextFoodCard1;