import React from "react";
import { DrinksCards1, DrinksCards2, DrinksCards3 } from "../menuDrinkCards/drinksCards";
import { MenuTextCard, MenuTextCard2 } from '../menuDrinkCards/menuTextCard/index';

class menuSmoothies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drinks1: props.drinks.drinks1,
            drinks2: props.drinks.drinks2,
            newTextInformation1: props.menuText[0].text,
            newTextInformation2: props.menuText[1].text
        };
    }

    componentDidMount(){
        console.log(this.state.drinks);
    }

    render() {
        if (!this.state.drinks1 && !this.state.newTextInformation1) {
            return <h1>Loading information...</h1>
        }

        let passedName = "Breakfast Smoothies";
        return (
            <div>
                <MenuTextCard information={this.state.newTextInformation1} />

                <div className="test">
                    {this.state.drinks1.map(function (item, i) {

                        let whichDivIsIt2 = item.div;
                        //Loading in different cards depending on what type of information comes from the database
                        return <div key={i}>
                            {whichDivIsIt2 === 1 ? (<DrinksCards1 item={item} />)
                                : whichDivIsIt2 === 2 ? (<DrinksCards2 item={item} />)
                                    : (<DrinksCards3 item={item} />)}

                        </div>

                    })}
                </div>


                <MenuTextCard2 passedName={passedName} information={this.state.newTextInformation2} />


                <div className="test">
                    {this.state.drinks2.map(function (item, i) {

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

export default menuSmoothies;

