import React from "react";
import "./navBar.css";
import {Navbar} from 'react-materialize';
import logo from '../navBar/logo.png'

class navBar extends React.Component {

    render() {
        return (
            <Navbar className="navMain">
            <img width={80} height={45} className="navImg" alt="Logo" src={logo}/>
            </Navbar>
        )
    }
};

export default navBar;