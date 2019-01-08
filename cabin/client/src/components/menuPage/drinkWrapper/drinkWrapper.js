import React from "react";
import "./drinkWrapper.css";
import { GeneralDrinks, MenuSmoothies } from "../menuTabs/index";
import { Link, Route } from "react-router-dom";
import API from "../../../utils/API";

class drinkWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newProps: props,
            menuTextName: '',
            isDesktop: false,
            showMenu: false,
            drinks: null,
            menuText: null
        };

        this.updateWindowListener = this.updateWindowListener.bind(this);
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.linkOption = this.linkOption.bind(this);
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

            case '/menu/flavored-lattes': {
                let foundKey = "Lattes"
                this.grabDrinkInfo(foundKey);
            };
                break;
            case "/menu/coffee": {
                let foundKey = "Coffee"
                this.grabDrinkInfo(foundKey);
            };
                break;
            case "/menu/teas": {
                let foundKey = "Tea"
                this.grabDrinkInfo(foundKey);
            };
                break;
            case "/menu/blended": {
                let foundKey = "Blended"
                this.grabDrinkInfo(foundKey);
            };
                break;
            case "/menu/smoothies": {
                let foundKey = "Smoothies"
                this.grabDrinkInfo(foundKey);
            };
                break;
            case "/menu/more": {
                let foundKey = "Lattes"
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
        this.setState({ menuTextName: null });
        this.setState({ menuTextName: key });

        //Calling on my Axios API call. This passes in the key and then returns what it gets on my promise
        API.getDrinks(key)
            .then(res => {
                this.setState({ drinks: res.data.generalDrinks.drinks });
                this.setState({ menuText: res.data.generalDrinks.text.text });
            }).catch(err => console.log(err))
    }

    linkOption = (key) => {
        let newClassName = '';
        if (key === 2) {
            newClassName = 'menu-list-drink-nav-list-wrapper-dropdown';
        } else {
            newClassName = 'menu-list-drink-nav-list-wrapper';
        }
        return (
            <div className={newClassName}>
                <div></div>
                <Link onClick={() => this.grabDrinkInfo("Lattes")} to="/menu/flavored-lattes" className="menu-list-drink-nav-list-dropdown-item line-height-dropdown-one x">Flavored Lattes</Link>
                <Link onClick={() => this.grabDrinkInfo("Coffee")} to="/menu/coffee" className="menu-list-drink-nav-list-dropdown-item line-height-dropdown-two x">Coffee</Link>
                <Link onClick={() => this.grabDrinkInfo("Tea")} to="/menu/teas" className="menu-list-drink-nav-list-dropdown-item line-height-dropdown-two x">Teas</Link>
                <Link onClick={() => this.grabDrinkInfo("Blended")} to="/menu/blended" className="menu-list-drink-nav-list-dropdown-item line-height-dropdown-two x">Blended</Link>
                <Link onClick={() => this.grabDrinkInfo("Smoothies")} to="/menu/smoothies" className="menu-list-drink-nav-list-dropdown-item line-height-dropdown-two x">Smoothies</Link>
                <Link onClick={() => this.grabDrinkInfo("Lattes")} to="/menu/more" className="menu-list-drink-nav-list-dropdown-item line-height-dropdown-two x">More</Link>

            </div>
        )
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
                        {isDesktop ? (
                                this.linkOption(1)
                        ) :

                            (
                                <div onClick={this.showMenu} className="menu-list-drink-nav-list-box">
                                    <div className="menu-list-drink-nav-list-button"></div>
                                    {/* These are my links after they are converted into a drop down menu. This is triggered by
                                    the boolean showMenu which is set to true when the window size reaches a certain width. */}
                                    {this.state.showMenu ?
                                        (<div>
                                            {this.linkOption(2)}
                                        </div>)
                                        : (null)}
                                </div>

                            )}






                    </div>

                    {this.state.drinks && this.state.menuText ?
                        (<div className="menu-list-drink-items-wrapper">
                            <Route exact path={`${this.state.newProps.props.match.url}/flavored-lattes`} render={() => <GeneralDrinks passedState={this.state} />} />
                            <Route exact path={`${this.state.newProps.props.match.url}/coffee`} render={() => <GeneralDrinks passedState={this.state} />} />
                            <Route exact path={`${this.state.newProps.props.match.url}/teas`} render={() => <GeneralDrinks passedState={this.state} />} />
                            <Route exact path={`${this.state.newProps.props.match.url}/blended`} render={() => <GeneralDrinks passedState={this.state} />} />
                            <Route exact path={`${this.state.newProps.props.match.url}/more`} render={() => <GeneralDrinks passedState={this.state} />} />
                            <Route exact path={`${this.state.newProps.props.match.url}/smoothies`} render={() => <MenuSmoothies passedState={this.state} />} />
                        </div>)

                        : (null)}







                </div>


                <div></div>
            </div >
        )
    }
};

export default drinkWrapper;