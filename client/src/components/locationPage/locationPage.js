import React from "react";
import Navbar from "../../components/navBar/index";
import './locationPage.css';
import LocationBanner from './locationBanner/index';
import LocationHoursWrapper from './locationHoursWrapper/index';

class locationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passingProps: props
        };
    }

    render() {

        return (
            <div>
                <Navbar></Navbar>
                <LocationBanner></LocationBanner>
                <LocationHoursWrapper></LocationHoursWrapper>
            </div>
        )
    }
};

export default locationPage;