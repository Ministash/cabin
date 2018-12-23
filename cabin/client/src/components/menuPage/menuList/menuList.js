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
            key: 0
        };
    }

    changeTheKey(key){
        this.setState({key: key});
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
                            <Link to="/menu/flavoured-lattes" onClick={()=> this.changeTheKey(1)} className="menu-list-drink-nav-list-item x">Flavoured Lattes</Link>
                            <Link to="/menu/coffee" onClick={()=> this.grabDrinkInfo(2)} className="menu-list-drink-nav-list-item x">Coffee</Link>
                            <Link to="/menu/teas" onClick={()=> this.grabDrinkInfo(3)} className="menu-list-drink-nav-list-item x">Teas</Link>
                            <Link to="/menu/blended" onClick={()=> this.grabDrinkInfo(4)} className="menu-list-drink-nav-list-item x">Blended</Link>
                            <Link to="/menu/smoothies" onClick={()=> this.grabDrinkInfo(5)} className="menu-list-drink-nav-list-item x">Smoothies</Link>
                            <Link to="/menu/more" onClick={()=> this.grabDrinkInfo(6)} className="menu-list-drink-nav-list-item x">More</Link>
                        </div>
                    </div>

                    <div className="menu-list-drink-items-wrapper">
                    <Route exact path={`${this.state.newProps.props.match.url}/flavoured-lattes`} render={(key) => <MenuLattes key={this.state.key}/>} />
                    </div>






                </div>


                <div></div>
            </div>
        )
    }
};

export default MenuList;