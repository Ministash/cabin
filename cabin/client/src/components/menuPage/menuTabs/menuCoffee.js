import React from "react";
import "./menuCoffee.css";
import { DrinksCards1, DrinksCards2 } from "../menuDrinkCards/drinksCards";
import MenuTextCard from '../menuDrinkCards/menuTextCard';

class menuCoffee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drinks: props.drinks,
            information: "From the cities of Mexico to the beautiful beaches of Costa Rica," +
                "we brew with a wide variety of beans for the coffee purist."
                + "For the more progressive coffee drinkers we offer every cup with their choice" +
                "of cream or vast acomprehensive list of flavoring."
        };
    }

    render() {
        if (!this.state.drinks) {
            return <h1>Loading information...</h1>
        }
        return (
            <div>
                <MenuTextCard information={this.state.information} />

                <div className="test">
                    {this.state.drinks.coffee.map(function (item, i) {

                        let whichDivIsIt2 = item.div;

                        return <div key={i}>

                            {whichDivIsIt2 === 1 ?

                                (<DrinksCards1 item={item} />)
                                :
                                (<DrinksCards2 item={item} />)}

                        </div>

                    })}
                </div>
            </div>


        )
    }

};

export default menuCoffee;

