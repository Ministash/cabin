import React from "react";
import "./mainPage.css";
import Boxes from '../../components/mainPage/boxes/index';
import SideBoxes from "../../components/mainPage/sideBoxes/index";
import Navbar from "../../components/navBar/index";




class MainPage extends React.Component {

    render() {

        return (
            <div>
                <Navbar></Navbar>
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

export default MainPage;