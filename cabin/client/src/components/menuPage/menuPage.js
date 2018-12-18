import React from "react";
import "./menuPage.css";
import Navbar from "../../components/navBar/index";
import MenuList from "../../components/menuPage/menuList/index";


class Menu extends React.Component {


    render() {
        return (
            <div>
                <Navbar></Navbar>
                <MenuList></MenuList>
            </div>
        )
    }
};

export default Menu;