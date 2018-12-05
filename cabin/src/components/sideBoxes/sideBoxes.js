import React from "react";
import "./sideBoxes.css";
// import drinks from "../sideBoxes/drink.jpg";
// import food from '../sideBoxes/burrito.jpg';
// import people from '../sideBoxes/drinks.jpg';
// import cabinPic from '../sideBoxes/cozy.jpg';




class Boxes extends React.Component {


    render() {
        return (
            <div className="body-sideboxes-wrapper">

                <div className="body-sideboxes-wrapper-individual-grid-left">
                    <div className="body-sideboxes-picture-left-1">
                        <div className="body-sideboxes-overlay-left">
                            <div className="body-sideboxes-overlay-left-text"></div>
                        </div>
                    </div>

                </div>

                <div className="body-sideboxes-wrapper-individual-grid-right">
                    <div className="body-sideboxes-picture-right-1">
                        <div className="body-sideboxes-overlay-right">
                            <div className="body-sideboxes-overlay-left-text"></div>
                        </div>
                    </div>
                </div>

                <div className="body-sideboxes-wrapper-individual-grid-left">
                    <div className="body-sideboxes-picture-left-2">
                        <div className="body-sideboxes-overlay-left">
                            <div className="body-sideboxes-overlay-left-text"></div>
                        </div>
                    </div>
                </div>


                <div className="body-sideboxes-wrapper-individual-grid-right">
                    <div className="body-sideboxes-picture-right-2">
                        <div className="body-sideboxes-overlay-right">
                            <div className="body-sideboxes-overlay-left-text"></div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
};

export default Boxes;