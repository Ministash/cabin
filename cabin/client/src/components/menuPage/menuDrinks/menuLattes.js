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

    componentWillMount() {
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
                    div: element.div
                }

                tempArray.push(newItem);

            });

            this.setState({ drinks: tempArray });
        });
    }


    render() {

        return (
            <div>
                <div className="menu-list-drink-information-box">
                    <div className="menu-list-drink-item-name">How They Are Made</div>
                    <div className="menu-list-drink-item-information-text-wrapper">
                        Specific to your preference, each flavoured latte is served either hot or iced.
                        Small and medium lattes are created with two shots of espresso, while our large lattes
                        are served with three.
                    </div>
                </div>


                <div>
                    {this.state.drinks.map(function (item, i) {
                        let whichDivIsIt2 = item.div;


                        return <div className="menu-list-drink-item" key={i}>
                            <div className="menu-list-drink-item-name">{item.name}</div>
                            <div className="menu-list-drink-item-flavor">Flavor: {item.flavor}</div>

                            {whichDivIsIt2 === 1 ?

                                (<div className="menu-list-drink-item-informational-wrapper">
                                    <div className="menu-list-drink-item-price-wrapper-1">
                                        <div className="menu-list-drink-item-price">S: ${item.price1}</div>
                                        <div className="menu-list-drink-item-price">M: ${item.price2}</div>
                                        <div className="menu-list-drink-item-price">L: ${item.price3}</div>
                                    </div>

                                </div>)
                                :
                                (<div className="menu-list-drink-item-informational-wrapper">
                                    <div className="menu-list-drink-item-price-wrapper">
                                        <div className="menu-list-drink-item-price">S: ${item.price1}</div>
                                        <div className="menu-list-drink-item-price">M: ${item.price2}</div>
                                        <div className="menu-list-drink-item-price">L: ${item.price3}</div>
                                    </div>

                                    <div className="menu-list-drink-item-price-temperature-wrapper">

                                        <div className="menu-list-drink-item-price-temperature-served">Served:

                                <div className="menu-list-drink-item-price-temperature">Hot or Cold</div>

                                        </div>

                                    </div>

                                </div>)}

                        </div>

                    })}
                </div>





            </div>



        )
    }

};

export default menuLattes;