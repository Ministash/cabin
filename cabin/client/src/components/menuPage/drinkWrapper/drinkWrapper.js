import React from "react";
import "./drinkWrapper.css";
import { GeneralDrinks, MenuSmoothies, MenuMore } from "../menuTabs/index";
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
        this.setState({ isDesktop: window.innerWidth > 920 });
    }

    whereAmI() {
        //This function ensures that even if the page is reloaded that my information will stay consistant
        switch (this.state.newProps.props.location.pathname) {

            case '/menu/flavored-lattes': {let foundKey = "Lattes"; this.grabDrinkInfo(foundKey);};
                break;
            case "/menu/coffee": {let foundKey = "Coffee"; this.grabDrinkInfo(foundKey);
            };
                break;
            case "/menu/teas": {let foundKey = "Tea"; this.grabDrinkInfo(foundKey);
            };
                break;
            case "/menu/blended": {let foundKey = "Blended"; this.grabDrinkInfo(foundKey);
            };
                break;
            case "/menu/smoothies": {let foundKey = "Smoothies"; this.grabDrinkInfo(foundKey);
            };
                break;
            case "/menu/redbull-infuser": {let foundKey = "Redbulls"; this.grabDrinkInfo(foundKey);
            };
                break;
                case "/menu/more": {let foundKey = "More"; this.grabDrinkInfo(foundKey);
            };
                break;

            default: {let foundKey = "Lattes"; this.grabDrinkInfo(foundKey);
            };
                break;
        }
    }

    showMenu(event) {
        event.preventDefault();

        //My function for showing the dropdown menu on my food navbar
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu() {
        //My function that handles removing the menu if something else is selected on the page

        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }

    grabDrinkInfo = (key) => {
        /*Removing the values of what is stored in state before getting new info. This makes testing things easier because if
          information is not returned I will know what the default state of each value is.  */
        this.setState({ drinks: null });
        this.setState({ menuText: null });
        this.setState({ menuTextName: null });
        
        //Key is passed through as the name for the database that we are accessing. Key would be something like "Coffee"
        this.setState({ menuTextName: key });

        //Calling on my Axios API call. This passes in the key and then returns what it gets on my promise
        API.getDrinks(key)
            .then(res => {
                this.setState({ drinks: res.data.generalDrinks.drinks });
                this.setState({ menuText: res.data.generalDrinks.text.text });
            }).catch(err => console.log(err))
    }

    linkOption = (key) => {
        //This function is just to make my code more dry. Now I only have to change the links for two different navbar menu states in one place
        let newClassNameWrapper = '';
        let className1 = '';
        let className2 = '';
        if (key === 2) {
            //Class name for my dropdown
            newClassNameWrapper = 'menu-list-drink-nav-list-wrapper-dropdown';
            className1 = 'menu-list-drink-nav-list-dropdown-item line-height-dropdown-one x';
            className2 = 'menu-list-drink-nav-list-dropdown-item line-height-dropdown-two x';
        } else {
            //Class name for normal state
            newClassNameWrapper = 'menu-list-drink-nav-list-wrapper';
            className1 = 'menu-list-drink-nav-list-item line-height-one x';
            className2 = 'menu-list-drink-nav-list-item line-height-two x';
        }

        //This piece of JSX is what shows up for my smaller navbar and my dropdown menu.
        return (
            <div className={newClassNameWrapper}>
                <div></div>
                <Link onClick={() => this.grabDrinkInfo("Lattes")} to="/menu/flavored-lattes" className={className1}>Flavored Lattes</Link>
                <Link onClick={() => this.grabDrinkInfo("Coffee")} to="/menu/coffee" className={className2}>Coffee</Link>
                <Link onClick={() => this.grabDrinkInfo("Tea")} to="/menu/teas" className={className2}>Teas</Link>
                <Link onClick={() => this.grabDrinkInfo("Blended")} to="/menu/blended" className={className2}>Blended</Link>
                <Link onClick={() => this.grabDrinkInfo("Smoothies")} to="/menu/smoothies" className={className2}>Smoothies</Link>
                <Link onClick={() => this.grabDrinkInfo("Redbulls")} to="/menu/redbull-infuser" className={className2}>Redbull Infusers</Link>
                <Link onClick={() => this.grabDrinkInfo("More")} to="/menu/more" className={className2}>More</Link>

            </div>
        )
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
                        {/* Deciding if my links should be in a drop down or not which is determined by my isDestop variable */}
                        {this.state.isDesktop ? (
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

                {/* This is where I load all of my drink items/informational box. General Drinks handles almost all of the the returned info. Menu Smoothies
                had different options that could not be loaded into the same mold*/}
                    {this.state.drinks && this.state.menuText ?
                        (<div className="menu-list-drink-items-wrapper">
                            <Route exact path={`${this.state.newProps.props.match.url}/flavored-lattes`} render={() => <GeneralDrinks passedState={this.state} />} />
                            <Route exact path={`${this.state.newProps.props.match.url}/coffee`} render={() => <GeneralDrinks passedState={this.state} />} />
                            <Route exact path={`${this.state.newProps.props.match.url}/teas`} render={() => <GeneralDrinks passedState={this.state} />} />
                            <Route exact path={`${this.state.newProps.props.match.url}/blended`} render={() => <GeneralDrinks passedState={this.state} />} />
                            <Route exact path={`${this.state.newProps.props.match.url}/redbull-infuser`} render={() => <GeneralDrinks passedState={this.state} />} />
                            <Route exact path={`${this.state.newProps.props.match.url}/smoothies`} render={() => <MenuSmoothies passedState={this.state} />} />
                            <Route exact path={`${this.state.newProps.props.match.url}/more`} render={() => <MenuMore passedState={this.state} />} />
                        </div>)

                        : (null)}

                </div>


                <div></div>
            </div >
        )
    }
};

export default drinkWrapper;