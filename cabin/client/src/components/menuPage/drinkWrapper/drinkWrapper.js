import React from "react";
import "./drinkWrapper.css";
import { GeneralDrinks } from "../menuTabs/index";
import { Link, Route } from "react-router-dom";
import API from "../../../utils/API";

class drinkWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newProps: props,
            isDesktop: false,
            showMenu: false,
            drinks: null,
            menuText: null
        };

        this.updateWindowListener = this.updateWindowListener.bind(this);
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    componentDidMount() {
        this.whereAmI();

        /* These two functions fire when the page is loaded ensuring that responsive things happen with my
        little drink navbar */
        this.updateWindowListener();
        window.addEventListener("resize", this.updateWindowListener);
    }

    componentWillUnount() {
        //We need to remove the EventListener so it does not take up more memory. 
        window.removeEventListener("resize", this.updateWindowListener);
    }

    updateWindowListener() {
        this.setState({ isDesktop: window.innerWidth > 950 });
    }

    whereAmI() {
        //This function ensures that even if the page is reloaded that my information will stay consistant
        switch (this.state.newProps.props.location.pathname) {

            case '/menu/flavoured-lattes': {
                let foundKey = "1"
                this.grabDrinkInfo(foundKey);
            };
                break;
            case "/menu/coffee": {
                let foundKey = "2"
                this.grabDrinkInfo(foundKey);
            };
                break;
            case "/menu/teas": {
                let foundKey = "3"
                this.grabDrinkInfo(foundKey);
            };
                break;
            case "/menu/blended": {
                let foundKey = "4"
                this.grabDrinkInfo(foundKey);
            };
                break;
            case "/menu/smoothies": {
                let foundKey = "5"
                this.grabDrinkInfo(foundKey);
            };
                break;
            case "/menu/more": {
                let foundKey = "6"
                this.grabDrinkInfo(foundKey);
            };
                break;

            default: {
                let foundKey = "1"
                this.grabDrinkInfo(foundKey);
            };
                break;
        }
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
        this.setState({ menuText: null });
        //Calling on my Axios API call. This passes in the key and then returns what it gets on my promise
        API.getDrinks(key)
            .then(res => {
                this.setState({ drinks: res.data.generalDrinks.drinks });
                this.setState({ menuText: res.data.generalDrinks.text.text });
            }).catch(err => console.log(err))
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
                        {/* These are my links before they are converted into a drop down menu */}
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
                                    {/* These are my links after they are converted into a drop down menu. This is triggered by
                                    the boolean showMenu which is set to true when the window size reaches a certain width. */}
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

                    {this.state.drinks && this.state.menuText ?
                        (<div className="menu-list-drink-items-wrapper">
                            <Route exact path={`${this.state.newProps.props.match.url}/flavoured-lattes`} render={() => <GeneralDrinks drinks={this.state.drinks} menuText={this.state.menuText} />} />
                            <Route exact path={`${this.state.newProps.props.match.url}/coffee`} render={() => <GeneralDrinks drinks={this.state.drinks} menuText={this.state.menuText} />} />
                            <Route exact path={`${this.state.newProps.props.match.url}/teas`} render={() => <GeneralDrinks drinks={this.state.drinks} menuText={this.state.menuText} />} />
                            <Route exact path={`${this.state.newProps.props.match.url}/blended`} render={() => <GeneralDrinks drinks={this.state.drinks} menuText={this.state.menuText} />} />
                        </div>)

                        : (null)}







                </div>


                <div></div>
            </div>
        )
    }
};

export default drinkWrapper;