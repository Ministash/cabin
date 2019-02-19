import React from "react";
import "./menuPage.css";
import Navbar from "../../components/navBar/index";
import DrinkWrapper from "../menuPage/drinkWrapper/index";
import FoodWrapper from '../menuPage/foodWrapper/index';
import FoodBanner from '../menuPage/foodBanner/index';


class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passingProps: props
        };
    }

    render() {

        return (
            <div>
                <Navbar></Navbar>
                <FoodBanner/>
                <DrinkWrapper props={this.state.passingProps}/>
                <div className="separator-2"></div>
                <FoodWrapper props={this.state.passingProps}/>
            </div>
        )
    }
};

export default Menu;