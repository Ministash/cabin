import React from "react";
import "./menuList.css";
import API from "../../../utils/API";
import MenuDrinks from "../menuDrinks/index"


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
        });
    }



    render() {
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
                        {this.state.lattes.map(function(item, i){
                            return (
                                <MenuDrinks
                                key={i}
                                name = {item.name}
                                flavor = {item.flavor}
                                price1 = {item.price1}
                                price2 = {item.price2}
                                price3 = {item.price3}
                                temperature = {item.temperature}
                                />
                                
                            );

                        })}

                    </div>






                </div>


                <div></div>
            </div>
        )
    }
};

export default MenuList;