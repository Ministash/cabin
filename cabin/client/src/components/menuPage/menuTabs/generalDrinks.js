import React from "react";
import "./generalDrinks.css";
import { DrinksCards1, DrinksCards2, DrinksCards3 } from "../menuDrinkCards/drinksCards";
import MenuTextCard from '../menuDrinkCards/menuTextCard';

class generalDrinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drinks: props.drinks,
            newTextInformation: props.menuText
        };
    }

    // componentDidMount(){
    //     console.log(this.state.drinks);
    //     console.log(this.state.newTextInformation);
    // }


    render() {
        //Making sure that all our information is collected so the program doesn't crash when nothing is returned
        if (!this.state.drinks && !this.state.newTextInformation) {
            return <h1>Loading information...</h1>
        }
        return (
            <div>
                <MenuTextCard information={this.state.newTextInformation} />

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

