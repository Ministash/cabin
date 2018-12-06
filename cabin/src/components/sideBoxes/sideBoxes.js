import React from "react";
import "./sideBoxes.css";
import drinks from "../sideBoxes/drink.jpg";
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
                            <div className="body-sideboxes-overlay-left-text">
                                Our Drinks
                            </div>
                        </div>
                    </div>
                    <div className="body-sideboxes-left-text-wrapper">
                        <p className="body-sideboxes-left-text">
                            From creamy lattes to frozen treats- we have it all.
                            Encompassing a syrup list of over (Whatever number)
                            we have just about every flavor that your heart could desire.
                            Not feeling something sweet? We also serve everything from cold brewed coffee to
                            replacement breakfast smoothies. We aim to please!
                    </p>
                    </div>
                </div>

                <div className="body-sideboxes-wrapper-individual-grid-right">
                    <div className="body-sideboxes-right-text">Hello</div>
                    <div className="relative-position">
                        <div className="body-sideboxes-picture-right-1">
                            <div className="body-sideboxes-overlay-right">
                                <div className="body-sideboxes-overlay-right-text">
                                    Our Food
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="body-sideboxes-wrapper-individual-grid-left">
                    <div className="body-sideboxes-picture-left-2">
                        <div className="body-sideboxes-overlay-left">
                            <div className="body-sideboxes-overlay-left-text">
                                Our Style
                            </div>
                        </div>
                    </div>
                    <div className="body-sideboxes-left-text">Hello</div>
                </div>

                <div className="body-sideboxes-wrapper-individual-grid-right">
                    <div className="body-sideboxes-right-text">Hello</div>
                    <div className="relative-position">
                        <div className="body-sideboxes-picture-right-2">
                            <div className="body-sideboxes-overlay-right">
                                <div className="body-sideboxes-overlay-right-text">
                                    Our Community
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
};

export default Boxes;