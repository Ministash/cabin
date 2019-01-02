import React from "react";
import "./menuList.css";
import { MenuLattes } from "../menuDrinks/index";
import { Link, Route } from "react-router-dom";


class MenuList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drinks: [],
            newProps: props,
            keyId: 0
        };
    }

    changeTheKey(passedKey){
        this.setState({keyId: passedKey});
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
                            <Link to="/menu/flavoured-lattes" className="menu-list-drink-nav-list-item x">Flavoured Lattes</Link>
                            <Link to="/menu/coffee" className="menu-list-drink-nav-list-item x">Coffee</Link>
                            <Link to="/menu/teas" className="menu-list-drink-nav-list-item x">Teas</Link>
                            <Link to="/menu/blended" className="menu-list-drink-nav-list-item x">Blended</Link>
                            <Link to="/menu/smoothies" className="menu-list-drink-nav-list-item x">Smoothies</Link>
                            <Link to="/menu/more" className="menu-list-drink-nav-list-item x">More</Link>
                        </div>
                    </div>

                    <div className="menu-list-drink-items-wrapper">
                    <Route exact path={`${this.state.newProps.props.match.url}/flavoured-lattes`} render={(props) => <MenuLattes/>} />
                    </div>






                </div>


                <div></div>
            </div>
        )
    }
};

export default MenuList;