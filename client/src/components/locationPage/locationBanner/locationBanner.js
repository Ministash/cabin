import React from "react";
import "./locationBanner.css";
import MapContainer from '../.././googleMaps/index';



class locationBanner extends React.Component {

    render() {

        return (

            <div class="background-location-banner">
            <MapContainer></MapContainer>
            </div>

        )
    }
};

export default locationBanner;