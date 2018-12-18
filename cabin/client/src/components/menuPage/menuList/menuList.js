import React from "react";
import "./menuList.css";
import API from "../../../utils/API";


class MenuList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lattes: []
        };
    }


    componentWillMount() {
        this.grabDrinkInfo();
    }

    grabDrinkInfo = () => {
        API.getLattes().then((res) => {
            // console.log(res.data.lattes);
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
            this.setState({ lattes: tempArray });
        })
    }



    render() {
        console.log(this.state.lattes);
        return (
            <div className="menu-list-drink-wrapper">
                <div></div>

                <div className="menu-list-drink-box">

                    <div className="menu-list-drink-nav">
                        <div className="menu-list-drink-nav-description x">
                            Popular Drinks
                        </div>
                        <div className="menu-list-drink-nav-list-wrapper">
                            <div></div>
                            <div className="menu-list-drink-nav-list-item x">Flavoured Lattes</div>
                            <div className="menu-list-drink-nav-list-item x">Coffee</div>
                            <div className="menu-list-drink-nav-list-item x">Teas</div>
                            <div className="menu-list-drink-nav-list-item x">Blended</div>
                            <div className="menu-list-drink-nav-list-item x">Smoothies</div>
                            <div className="menu-list-drink-nav-list-item x">More</div>
                        </div>
                    </div>

                    <div className="menu-list-drink-items-wrapper">


                        <div className="menu-list-drink-item">
                            <div className="menu-list-drink-item-name">Matt and Tracy</div>

                            <div className="menu-list-drink-item-price-wrapper">
                                <div className="menu-list-drink-item-price">S: $3.90</div>
                                <div className="menu-list-drink-item-price">M: $3.80</div>
                                <div className="menu-list-drink-item-price">L: $4.15</div>
                            </div>

                            <div className="menu-list-drink-item-price-temperature-wrapper">
                                <div className="menu-list-drink-item-price-temperature-served">Served:</div>
                                <div className="menu-list-drink-item-price-temperature">Hot Or Cold</div>

                            </div>
                        </div>






                    </div>






                </div>


                <div></div>
            </div>
        )
    }
};

export default MenuList;