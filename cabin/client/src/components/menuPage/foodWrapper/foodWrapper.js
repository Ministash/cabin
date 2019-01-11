import React from "react";
import { Link, Route } from "react-router-dom";
import './foodWrapper.css';
import {GeneralFoods} from './foodTabs/index';
import API from "../../../utils/API";

class foodWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDesktop: false,
            showMenu: false,
            newProps: props,
            foods: null,
        };

        this.updateWindowListener = this.updateWindowListener.bind(this);
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.linkOption = this.linkOption.bind(this);
    
    }

    componentDidMount() {
        this.default();
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

    default() { 
        let foundKey = "criossants"; 
        this.grabDrinkInfo(foundKey);
    }

    linkOption = (key) => {
        //This function is just to make my code more dry. Now I only have to change the links for two different navbar menu states in one place
        let newClassNameWrapper = '';
        let className1 = '';
        let className2 = '';
        if (key === 2) {
            //Class name for my dropdown
            newClassNameWrapper = 'menu-list-food-nav-list-wrapper-dropdown';
            className1 = 'menu-list-drink-nav-list-dropdown-item line-height-dropdown-one x';
            className2 = 'menu-list-drink-nav-list-dropdown-item line-height-dropdown-two x';
        } else {
            //Class name for normal state
            newClassNameWrapper = 'menu-list-food-nav-list-wrapper';
            className1 = 'menu-list-drink-nav-list-item line-height-one x';
            className2 = 'menu-list-drink-nav-list-item line-height-two x';
        }

        //This piece of JSX is what shows up for my smaller navbar and my dropdown menu.
        return (
            <div className={newClassNameWrapper}>
                <div></div>
                <Link onClick={() => this.grabDrinkInfo("criossants")} to="/menu/main" className={className1}>Breakfast</Link>
                <Link onClick={() => this.grabDrinkInfo("bagels")} to="/menu/main" className={className2}>Bagels</Link>
                <Link onClick={() => this.grabDrinkInfo("paninis")} to="/menu/main" className={className2}>Panini's</Link>
                <Link onClick={() => this.grabDrinkInfo("chicken-salad")} to="/menu/main" className={className2}>Chicken Salad</Link>
                <Link onClick={() => this.grabDrinkInfo("salad")} to="/menu/main" className={className2}>Soup & Salad</Link>
                <Link onClick={() => this.grabDrinkInfo("deli")} to="/menu/main" className={className2}>Deli Sandwiches</Link>
                <Link onClick={() => this.grabDrinkInfo("kids")} to="/menu/main" className={className2}>Kids</Link>
                <Link onClick={() => this.grabDrinkInfo("other")} to="/menu/main" className={className2}>More</Link>

            </div>
        )
    }

    grabDrinkInfo = (key) => {
        console.log(key);
        /*Removing the values of what is stored in state before getting new info. This makes testing things easier because if
          information is not returned I will know what the default state of each value is.  */
        this.setState({ foods: null });
        
        //Key is passed through as the name for the database that we are accessing. Key would be something like "Coffee"
        this.setState({ menuTextName: key });

        //Calling on my Axios API call. This passes in the key and then returns what it gets on my promise
        API.getFoods(key)
            .then(res => {
                this.setState({ foods: res.data.generalFoods });
            }).catch(err => console.log(err))
    }


    render() {
        return (
            <div className="menu-list-food-wrapper">

                <div></div>

                <div className="menu-list-food-box">

                    <div className="menu-list-food-nav">

                        <div className="menu-list-food-nav-description x">
                            Popular Foods
                        </div>
                        {/* Deciding if my links should be in a drop down or not which is determined by my isDestop variable */}
                        {this.state.isDesktop ? (
                                this.linkOption(1)
                        ) :
                            (
                                <div onClick={this.showMenu} className="menu-list-food-nav-list-box">
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
                    {this.state.foods ?
                        (<div className="menu-list-food-items-wrapper">
                            <Route exact path={`${this.state.newProps.props.match.url}/main`} render={() => <GeneralFoods passedState={this.state} />} />
                        </div>)

                        : (null)}

                </div>


                <div></div>
            </div >
        )
    }
};

export default foodWrapper;