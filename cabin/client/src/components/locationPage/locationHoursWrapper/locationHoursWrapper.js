import React from "react";
import './locationHoursWrapper.css'
import Location from './location';

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

                </div>
            </div>
        )
    }
};

export default locationHoursWrapper;