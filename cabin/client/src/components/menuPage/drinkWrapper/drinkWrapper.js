import React from "react";
import "./drinkWrapper.css";
import { MenuLattes, MenuCoffee, MenuSmoothies } from "../menuTabs/index";
import { Link, Route } from "react-router-dom";
import API from "../../../utils/API";

class drinkWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drinks: null,
            newProps: props,
            isDesktop: false,
            showMenu: false,
        };

        this.updateWindowListener = this.updateWindowListener.bind(this);
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    componentDidMount() {
        this.grabDrinkInfo(1);
        this.updateWindowListener();
        window.addEventListener("resize", this.updateWindowListener);
    }

    componentWillUnount() {
        window.removeEventListener("resize", this.updateWindowListener);
        this.updateWindowListener();
    }

    updateWindowListener() {
        this.setState({ isDesktop: window.innerWidth > 950 });
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu() {
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }

    grabDrinkInfo = (key) => {
        this.setState({ drinks: null });
        API.getDrinks(key)
            .then(res => this.setState({ drinks: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        const isDesktop = this.state.isDesktop;

        return (
            <div className="menu-list-drink-wrapper">

                <div></div>

                <div className="menu-list-drink-box">


                    <div className="menu-list-drink-nav">

                        <div className="menu-list-drink-nav-description x">
                            Popular Drinks
                        </div>

                        {isDesktop ? (<div className="menu-list-drink-nav-list-wrapper">
                            <div></div>
                            <Link onClick={() => this.grabDrinkInfo("1")} to="/menu/flavoured-lattes" className="menu-list-drink-nav-list-item x">Flavoured Lattes</Link>
                            <Link onClick={() => this.grabDrinkInfo("2")} to="/menu/coffee" className="menu-list-drink-nav-list-item x">Coffee</Link>
                            <Link onClick={() => this.grabDrinkInfo("3")} to="/menu/teas" className="menu-list-drink-nav-list-item x">Teas</Link>
                            <Link onClick={() => this.grabDrinkInfo("4")} to="/menu/blended" className="menu-list-drink-nav-list-item x">Blended</Link>
                            <Link onClick={() => this.grabDrinkInfo("5")} to="/menu/smoothies" className="menu-list-drink-nav-list-item x">Smoothies</Link>
                            <Link onClick={() => this.grabDrinkInfo("6")} to="/menu/more" className="menu-list-drink-nav-list-item x">More</Link>
                        </div>) :

                            (
                                <div onClick={this.showMenu} className="menu-list-drink-nav-list-box">
                                    <div className="menu-list-drink-nav-list-button"></div>

                                    {this.state.showMenu ?
                                        (<div className="menu-list-drink-nav-list-wrapper-dropdown">
                                            <Link onClick={() => this.grabDrinkInfo("1")} to="/menu/flavoured-lattes" className="menu-list-drink-nav-list-dropdown-item line-height-dropdown-one x">Flavoured Lattes</Link>
                                            <Link onClick={() => this.grabDrinkInfo("2")} to="/menu/coffee" className="menu-list-drink-nav-list-dropdown-item line-height-dropdown-two x">Coffee</Link>
                                            <Link onClick={() => this.grabDrinkInfo("3")} to="/menu/teas" className="menu-list-drink-nav-list-dropdown-item line-height-dropdown-two x">Teas</Link>
                                            <Link onClick={() => this.grabDrinkInfo("4")} to="/menu/blended" className="menu-list-drink-nav-list-dropdown-item line-height-dropdown-two x">Blended</Link>
                                            <Link onClick={() => this.grabDrinkInfo("5")} to="/menu/smoothies" className="menu-list-drink-nav-list-dropdown-item line-height-dropdown-two x">Smoothies</Link>
                                            <Link onClick={() => this.grabDrinkInfo("6")} to="/menu/more" className="menu-list-drink-nav-list-dropdown-item line-height-dropdown-two x">More</Link>
                                        </div>)
                                        : (null)}
                                </div>

                            )}






                    </div>

                    {this.state.drinks ?
                        (<div className="menu-list-drink-items-wrapper">
                            <Route exact path={`${this.state.newProps.props.match.url}/flavoured-lattes`} render={() => <MenuLattes drinks={this.state.drinks} />} />
                            <Route exact path={`${this.state.newProps.props.match.url}/coffee`} render={() => <MenuCoffee drinks={this.state.drinks} />} />
                            <Route exact path={`${this.state.newProps.props.match.url}/smoothies`} render={() => < MenuSmoothies drinks={this.state.drinks} />} />
                        </div>)

                        : (null)}







                </div>


                <div></div>
            </div>
        )
    }
};

export default drinkWrapper;