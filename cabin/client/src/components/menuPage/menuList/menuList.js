import React from "react";
import "./menuList.css";


class MenuList extends React.Component {


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
                            <div className="menu-list-drink-nav-list-item x">Lattes</div>
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
                            <div></div>
                        </div>


                    </div>







                </div>


                <div></div>
            </div>
        )
    }
};

export default MenuList;