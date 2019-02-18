import React from "react";
import './location.css'
import MapContainer from '../../../googleMaps/index';

class location extends React.Component {
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

                <div className="location-maps-wrapper">
                        
                </div>

            </div>

        )
    }
};

export default location;