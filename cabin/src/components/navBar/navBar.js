import React from "react";
import "./navBar.css";
import {Navbar} from 'react-materialize';
import logo from '../navBar/logo.png'

class navBar extends React.Component {

    render() {
        return (
            <div>
            <Navbar className="navMain">
            <img width={80} height={45} className="navImg" alt="Logo" src={logo}/>
            </Navbar>

            </div>
        )
    }
};

export default navBar;