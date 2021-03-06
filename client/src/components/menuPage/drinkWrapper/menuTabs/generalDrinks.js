import React from "react";
import "./generalDrinks.css";
import { DrinksCards1, DrinksCards2, DrinksCards3 } from "../menuDrinkCards/drinksCards";
import {MenuTextCard} from '../menuDrinkCards/menuTextCard/index';

class generalDrinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drinks: props.passedState.drinks,
            newTextInformation: props.passedState.menuText,
            menuTextName: props.passedState.menuTextName,
            newProps: props.NewProps
        };
    }

    componentDidMount(){
        console.log(this.state.newProps);
    }


    render() {
        //Making sure that all our information is collected so the program doesn't crash when nothing is returned
        if (!this.state.drinks && !this.state.newTextInformation) {
            return <h1>Loading information...</h1>
        }
        return (
            <div>
                <MenuTextCard menuTextName={this.state.menuTextName} information={this.state.newTextInformation} />

                <div className="test">
                    {this.state.drinks.map(function (item, i) {

                        let whichDivIsIt2 = item.div;
                        //Loading in different cards depending on what type of information comes from the database
                        return <div key={i}>
                            {whichDivIsIt2 === 1 ? (<DrinksCards1 item={item} />)
                                : whichDivIsIt2 === 2 ? (<DrinksCards2 item={item} />)
                                    : (<DrinksCards3 item={item} />)}

                        </div>

                    })}
                </div>
            </div>


        )
    }

};

export default generalDrinks;

