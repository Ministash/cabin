import React from "react";
import "./menuList.css";
import { MenuLattes, MenuCoffee } from "../menuDrinks/index";
import { Link, Route } from "react-router-dom";


class MenuList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drinks: [],
            newProps: props,
            isDesktop: false,
            showMenu: false,
        };

        this.updatePredicate = this.updatePredicate.bind(this);
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
    }

    componentWillUnount() {
        window.removeEventListener("resize", this.updatePredicate);
        this.setState({ isDesktop: false });
    }

    updatePredicate() {
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
                            <Link to="/menu/flavoured-lattes" className="menu-list-drink-nav-list-item x">Flavoured Lattes</Link>
                            <Link to="/menu/coffee" className="menu-list-drink-nav-list-item x">Coffee</Link>
                            <Link to="/menu/teas" className="menu-list-drink-nav-list-item x">Teas</Link>
                            <Link to="/menu/blended" className="menu-list-drink-nav-list-item x">Blended</Link>
                            <Link to="/menu/smoothies" className="menu-list-drink-nav-list-item x">Smoothies</Link>
                            <Link to="/menu/more" className="menu-list-drink-nav-list-item x">More</Link>
                        </div>) :

                            (
                                <div onClick={this.showMenu} className="menu-list-drink-nav-list-box">
                                    <div className="menu-list-drink-nav-list-button"></div>

                                    {this.state.showMenu
                                        ? (
                                            <div className="menu-list-drink-nav-list-wrapper-dropdown">
                                                <Link to="/menu/flavoured-lattes" className="menu-list-drink-nav-list-dropdown-item line-height-dropdown-one x">Flavoured Lattes</Link>
                                                <Link to="/menu/coffee" className="menu-list-drink-nav-list-dropdown-item line-height-dropdown-two x">Coffee</Link>
                                                <Link to="/menu/teas" className="menu-list-drink-nav-list-dropdown-item line-height-dropdown-two x">Teas</Link>
                                                <Link to="/menu/blended" className="menu-list-drink-nav-list-dropdown-item line-height-dropdown-two x">Blended</Link>
                                                <Link to="/menu/smoothies" className="menu-list-drink-nav-list-dropdown-item line-height-dropdown-two x">Smoothies</Link>
                                                <Link to="/menu/more" className="menu-list-drink-nav-list-dropdown-item line-height-dropdown-two x">More</Link>
                                            </div>
                                        )
                                        : (
                                            null
                                        )}
                                </div>

                            )}






                    </div>

                    <div className="menu-list-drink-items-wrapper">
                        <Route exact path={`${this.state.newProps.props.match.url}/flavoured-lattes`} render={(props) => <MenuLattes />} />
                        <Route exact path={`${this.state.newProps.props.match.url}/coffee`} render={(props) => <MenuCoffee drinks={this.state.drinks} />} />
                    </div>






                </div>


                <div></div>
            </div>
        )
    }
};

export default MenuList;