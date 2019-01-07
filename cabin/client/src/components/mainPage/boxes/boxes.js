import React from "react";
import "./boxes.css";
import photo1 from "./boxicon2.jpg"
import photo2 from './contact.jpg';
import { Link} from "react-router-dom";




class Boxes extends React.Component {


    render() {
        return (
            <div className="background-boxes">
                <div className="boxes-space"></div>
                <div className="body-two-boxes">

                    <div>
                        <div className="body-boxes-overlay-two">
                            <div className="box-two-text x">Location</div>
                        </div>
                        <img src={photo1} className="second-box" alt="location" />
                    </div>

                    <div>
                        <div className="body-boxes-overlay-two">
                            <div className="box-two-text x">Contact Us</div>
                        </div>
                        <img src={photo2} className="second-box" alt="location" />
                    </div>

                    <div>
                        <div className="body-boxes-overlay-two">
                            <div className="box-two-text x">About Us</div>
                        </div>
                        <img src={photo1} className="second-box" alt="location" />
                    </div>

                </div>

                <div className="boxes-space-two"></div>

                <Link to="/menu/flavored-lattes" className="body-one-boxes">
                    <div></div>
                    <div className="first-box">
                    <div className="body-boxes-overlay-one">
                            <div className="box-one-text x">Our Menu</div>
                        </div>
                    </div>
                </Link>

            </div>
        )
    }
};

export default Boxes;