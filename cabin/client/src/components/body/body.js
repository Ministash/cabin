import React from "react";
import "./body.css";
import API from "../../utils/API";
import Boxes from '../boxes/index';
import SideBoxes from "../sideBoxes/index";




class Body extends React.Component {

    render() {

        return (
            <div>
                <div className="background">
                    <div className="body-welcome-message-wrapper">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>

                        <div className="body-welcome-message">
                            <div className="body-welcome-text">
                                <div></div>
                                <div>Welcome To The Cabin Family</div>
                                <div></div>

                            </div>
                        </div>
                    </div>
                </div>

                <Boxes></Boxes>

                <div className="separator"></div>

                <SideBoxes></SideBoxes>
            </div>
        )
    }
};

export default Body;