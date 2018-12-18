import React from "react";
import "./menu.css";
import Navbar from "../../components/navBar/index";
import MenuList from "../../components/menuList/index";


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