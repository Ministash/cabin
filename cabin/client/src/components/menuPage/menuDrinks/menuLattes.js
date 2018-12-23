import React from "react";
import "./menuLattes.css";
import API from "../../../utils/API";

class menuLattes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drinks: []
        };
    }

    componentWillMount(){
        let key = 1;
        this.grabDrinkInfo(1);
    }


    grabDrinkInfo = (key) => {
        API.getDrinks(key).then((res) => {

            let tempArray = [];
            res.data.lattes.forEach(element => {
                let newItem = {
                    name: element.name,
                    flavor: element.flavor,
                    price1: element.price1,
                    price2: element.price2,
                    price3: element.price3,
                    temperature: element.temperature
                }

                tempArray.push(newItem);

            });
            this.setState({ drinks: tempArray });
        });
    }



    render() {
        console.log(this.state.drinks);
        let isItHotOrCold = "";
        if (this.state.drinks.temperature === 1) {
            isItHotOrCold = "Hot";
        } else if (this.state.drinks.temperature === 2) {
            isItHotOrCold = "Cold";
        } else if (this.state.drinks.temperature === 3) {
            isItHotOrCold = "Hot Or Cold"
        } else if (this.state.drinks.temperature === 4) {
            isItHotOrCold = "Blended"
        } else if (this.state.drinks.temperature) {
            isItHotOrCold = "Hot, Cold Or Blended"
        }

        return (
            <div className="menu-list-drink-item" key={this.state.drinks.i}>
                <div className="menu-list-drink-item-name">{this.state.drinks.name}</div>
                <div className="menu-list-drink-item-flavor">Flavor: {this.state.drinks.flavor}</div>

                <div className="menu-list-drink-item-price-wrapper">
                    <div className="menu-list-drink-item-price">S: ${this.state.drinks.price1}</div>
                    <div className="menu-list-drink-item-price">M: ${this.state.drinks.price2}</div>
                    <div className="menu-list-drink-item-price">L: ${this.state.drinks.price3}</div>
                </div>

                <div className="menu-list-drink-item-price-temperature-wrapper">
                    <div className="menu-list-drink-item-price-temperature-served">Served:
                <div className="menu-list-drink-item-price-temperature">{isItHotOrCold}</div>
                    </div>

                </div>
            </div>
        )
    }
};

export default menuLattes;