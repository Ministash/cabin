import React from "react";
import './locationHoursWrapper.css'
import Location from './location';
import Hours from './hours';

class locationHoursWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passingProps: props
        };
    }

    render() {

        return (

            <div>
                <div className="separator-3"></div>

                <div className="location-hours-wrapper">
                    <Location></Location>

                    <div className="location-hours-middle-cursive-text-wrapper">
                            <div className="location-hours-middle-cursive-text font-cursive x">
                                    Come Visit Us Soon!
                            </div>
                    </div>

                    <Hours></Hours>

                </div>
            </div>
        )
    }
};

export default locationHoursWrapper;