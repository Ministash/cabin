import React from "react";
import './location.css'

class locationHoursWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passingProps: props
        };
    }

    render() {

        return (

            <div className='location-page-location-box-wrapper'>

                <div className="location-text-wrapper">
                    <div className="location-text">Location</div>
                    <div className='location-text-underline'></div>
                </div>

            </div>

        )
    }
};

export default locationHoursWrapper;