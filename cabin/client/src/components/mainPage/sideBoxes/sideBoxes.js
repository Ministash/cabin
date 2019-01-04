import React from "react";
import "./sideBoxes.css";
// import drinks from "../sideBoxes/drink.jpg";
// import food from '../sideBoxes/burrito.jpg';
// import people from '../sideBoxes/drinks.jpg';
// import cabinPic from '../sideBoxes/cozy.jpg';




class sideBoxes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDesktop: false,
        };

        this.updatePredicate = this.updatePredicate.bind(this);
    }

    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
        this.setState({ isDesktop: false });
    }

    updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 1040 });
    }




    render() {
        const isDesktop = this.state.isDesktop;

        return (
            <div className="body-sideboxes-wrapper">

                <div className="body-sideboxes-wrapper-individual-grid-left">
                    <div className="body-sideboxes-picture-left-1">
                        <div className="body-sideboxes-overlay-left">

                            {isDesktop ? (<div className="body-sideboxes-overlay-left-text">
                                Our Drinks
                            </div>) : (
                                    <div className="body-sideboxes-overlay-left-text">
                                        From creamy lattes to frozen treats- we have it all.
                            Encompassing a syrup, sauce, and sugar free list of over 65+ choices
                            we have just about every flavor that your heart could desire.
                            Not feeling something sweet? We also serve everything from cold brewed coffee to
                            replacement breakfast smoothies. We aim to please!
                                    </div>

                                )}
                        </div>
                    </div>
                    <div className="body-sideboxes-left-text-wrapper">
                        {isDesktop ? (<p className="body-sideboxes-left-text">
                            From creamy lattes to frozen treats- we have it all.
                            Encompassing a syrup, sauce, and sugar free list of over 65+ choices
                            we have just about every flavor that your heart could desire.
                            Not feeling something sweet? We also serve everything from cold brewed coffee to
                            replacement breakfast smoothies. We aim to please!
                    </p>) : (
                                <p></p>
                            )}

                    </div>
                </div>

                <div className="body-sideboxes-wrapper-individual-grid-right">
                    <div className="body-sideboxes-right-text-wrapper">
                        {isDesktop ? (<p className="body-sideboxes-right-text">
                            From creamy lattes to frozen treats- we have it all.
                            Encompassing a syrup, sauce, and sugar free list of over 65+ choices
                            we have just about every flavor that your heart could desire.
                            Not feeling something sweet? We also serve everything from cold brewed coffee to
                            replacement breakfast smoothies. We aim to please!
                    </p>) : (
                                <p></p>
                            )}

                    </div>
                    <div className="relative-position">
                        <div className="body-sideboxes-picture-right-1">
                            <div className="body-sideboxes-overlay-right">
                                {isDesktop ? (<div className="body-sideboxes-overlay-right-text">
                                    Our Food
                            </div>) : (
                                        <div className="body-sideboxes-overlay-right-text">
                                            From creamy lattes to frozen treats- we have it all.
                                Encompassing a syrup, sauce, and sugar free list of over 65+ choices
                                we have just about every flavor that your heart could desire.
                                Not feeling something sweet? We also serve everything from cold brewed coffee to
                                replacement breakfast smoothies. We aim to please!
                                    </div>

                                    )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="body-sideboxes-wrapper-individual-grid-left">
                    <div className="body-sideboxes-picture-left-2">
                        <div className="body-sideboxes-overlay-left">
                            {isDesktop ? (<div className="body-sideboxes-overlay-left-text">
                                Our Style
                            </div>) : (
                                    <div className="body-sideboxes-overlay-left-text">
                                        From creamy lattes to frozen treats- we have it all.
                            Encompassing a syrup, sauce, and sugar free list of over 65+ choices
                            we have just about every flavor that your heart could desire.
                            Not feeling something sweet? We also serve everything from cold brewed coffee to
                            replacement breakfast smoothies. We aim to please!
                                    </div>

                                )}
                        </div>
                    </div>
                    <div className="body-sideboxes-left-text-wrapper">
                        {isDesktop ? (<p className="body-sideboxes-left-text">
                            From creamy lattes to frozen treats- we have it all.
                            Encompassing a syrup, sauce, and sugar free list of over 65+ choices
                            we have just about every flavor that your heart could desire.
                            Not feeling something sweet? We also serve everything from cold brewed coffee to
                            replacement breakfast smoothies. We aim to please!
                    </p>) : (
                                <p></p>
                            )}

                    </div>
                </div>

                <div className="body-sideboxes-wrapper-individual-grid-right">
                    <div className="body-sideboxes-right-text-wrapper">
                        {isDesktop ? (<p className="body-sideboxes-right-text">
                            From creamy lattes to frozen treats- we have it all.
                            Encompassing a syrup, sauce, and sugar free list of over 65+ choices
                            we have just about every flavor that your heart could desire.
                            Not feeling something sweet? We also serve everything from cold brewed coffee to
                            replacement breakfast smoothies. We aim to please!
                    </p>) : (
                                <p></p>
                            )}

                    </div>
                    <div className="relative-position">
                        <div className="body-sideboxes-picture-right-2">
                            <div className="body-sideboxes-overlay-right">
                                {isDesktop ? (<div className="body-sideboxes-overlay-right-text">
                                    Our Community
                            </div>) : (
                                        <div className="body-sideboxes-overlay-right-text">
                                            From creamy lattes to frozen treats- we have it all.
                                Encompassing a syrup, sauce, and sugar free list of over 65+ choices
                                we have just about every flavor that your heart could desire.
                                Not feeling something sweet? We also serve everything from cold brewed coffee to
                                replacement breakfast smoothies. We aim to please!
                                    </div>

                                    )}
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
};

export default sideBoxes;