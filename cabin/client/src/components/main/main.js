import React from "react";
import "./main.css";
import Navbar from "../../components/navBar/index";
import Body from '../../components/body/index';


class Main extends React.Component {


    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Body></Body>
            </div>
        )
    }
};

export default Main;