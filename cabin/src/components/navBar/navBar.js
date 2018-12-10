import React from "react";
import "./navBar.css";
import logo from '../navBar/logo.png'

class navBar extends React.Component {

    render() {
        return (
            <div className="navMain">
                <div></div>
                <img width={80} height={45} brand="logo" className="navImg" alt="Logo" src={logo} />
                <div></div>
                <div className="navLink1 navLink">Menu</div>
                <div className="navLink2 navLink">About Us</div>
                <div className="navLink3 navLink">Location</div>
                <div className="navLink4 navLink">Contact</div>
            </div>
        )
    }
};

export default navBar;