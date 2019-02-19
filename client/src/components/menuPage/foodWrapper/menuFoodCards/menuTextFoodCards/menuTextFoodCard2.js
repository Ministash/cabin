import React from "react";


const menuTextFoodCard2 = props => (
    <div className="floating-menu-list-drink-information-box-2">
        <div id="menu-list-drink-information-box-2">
            <div className="menu-list-drink-item-name">How They Are Made: {props.passedName}</div>
            <div className="menu-list-drink-item-information-text-wrapper-coffee">
                {props.information}
            </div>
        </div>

    </div>
);

export default menuTextFoodCard2;