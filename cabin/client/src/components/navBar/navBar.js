import React from "react";
import "./navBar.css";
import logo from '../navBar/logo.png';
import { Link } from "react-router-dom";

class navBar extends React.Component {

    render() {
        return (
            <div className="navMain">
                <div></div>
                <img width={80} height={45} brand="logo" className="navImg" alt="Logo" src={logo} />
                <div></div>

                <Link to={`Menu`}  className="navLink1 navLink x link">
                Menu
                </Link>

                <div className="navLink2 navLink x">About Us</div>
                <div className="navLink3 navLink x">Location</div>
                <div className="navLink4 navLink x">Contact</div>
            </div>
        )
    }
};

export default navBar;