import React from "react";
import './hours.css'

class hours extends React.Component {
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
                    <div className="location-text">Hours</div>
                    <div className='location-text-underline'></div>
                </div>

                <div className="hours-times-wrapper">
                        
                </div>

            </div>

        )
    }
};

export default hours;