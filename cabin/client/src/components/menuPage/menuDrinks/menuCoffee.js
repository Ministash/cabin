import React from "react";
import "./menuCoffee.css";
import API from "../../../utils/API";
import { drinksCards1, drinksCards2 } from "./drinksCards/index";

class menuCoffee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drinks: []
        };
    }

    componentWillMount() {
        this.grabDrinkInfo(2);
    }


    grabDrinkInfo = (key) => {
        // API.pushDrinks();
        API.getDrinks(key).then(res => {

            let tempArray = res.data.coffee;
            this.setState({ drinks: tempArray });
        });
    }




    render() {
        const isFetching = this.state;
        return (

            <div>
                {isFetching ? (<h2>Loading...</h2>) : (
                    <div>
                                        <div className="menu-list-drink-information-box">
                    <div className="menu-list-drink-item-name">How They Are Made</div>
                    <div className="menu-list-drink-item-information-text-wrapper-coffee">
                        From the cities of Mexico to the beautiful beaches of Costa Rica, we
                            brew with a wide variety of beans for the coffee purist. For the more
                            progressive coffee drinkers we offer every cup with their choice of cream or vast a
                            comprehensive list of flavoring.
                    </div>
                </div>

                <div className="test">
                    {this.state.drinks.map(function (item, i) {
                        let whichDivIsIt2 = item.div;


                        return <div className="menu-list-drink-items" key={i}>
                            <div className="menu-list-drink-item-name">{item.name}</div>
                            <div className="menu-list-drink-item-flavor">Made With: {item.madeW}</div>

                            {whichDivIsIt2 === 1 ?

                                (<drinksCards1 drinks={this.state.drinks} />)
                                :
                                (<drinksCards2 drinks={this.state.drinks} />)}

                        </div>

                    })}
                </div>
                    </div>
                )}

            </div>



        )
    }

};

export default menuCoffee;