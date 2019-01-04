import React from "react";
import "./menuLattes.css";
import MenuTextCard from '../menuDrinkCards/menuTextCard';
import { DrinksCards1, DrinksCards2 } from "../menuDrinkCards/drinksCards";

class menuLattes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drinks: props.drinks,
            information: "Specific to your preference each flavoured latte" +
                "is served either hot or iced." +
                " Small and medium lattes are created with two shots of" +
                "espresso, while our large lattes are served with three."
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
                    {this.state.drinks.lattes.map(function (item, i) {

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

export default menuLattes;