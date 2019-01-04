import React from "react";
import "./menuPage.css";
import Navbar from "../../components/navBar/index";
import DrinkWrapper from "../menuPage/drinkWrapper/index";


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
                <DrinkWrapper props={this.state.passingProps}/>
            </div>
        )
    }
};

export default Menu;