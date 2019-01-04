import React from "react";
import "./menuCoffee.css";
import { DrinksCards1, DrinksCards2, DrinksCards3 } from "../menuDrinkCards/drinksCards";
import MenuTextCard from '../menuDrinkCards/menuTextCard';

class menuSmoothies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drinks: props.drinks,
            information: "Smoothies"
        };
    }

    render() {
        console.log(this.state.smoothies);
        if (!this.state.drinks) {
            return <h1>Loading information...</h1>
        }
        return (
            <div>
                <MenuTextCard information={this.state.information} />

                <div className="test">
                    {this.state.drinks.smoothies.map(function (item, i) {

                        let whichDivIsIt2 = item.div;

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

export default menuSmoothies;

