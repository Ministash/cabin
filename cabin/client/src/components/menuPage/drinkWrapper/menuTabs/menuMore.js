import React from "react";
import './menuMore.css';
import { DrinksCards1, DrinksCards2, DrinksCards3 } from "../menuDrinkCards/drinksCards";
import { MenuTextCard } from '../menuDrinkCards/menuTextCard';

class menuMore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drinks1: props.passedState.drinks.drinks1,
            drinks2: props.passedState.drinks.drinks2,
            syrups: null,
            sauces: null,
            sfsyrups: null,
            sfsauce: null,
            newTextInformation1: props.passedState.menuText[0].text,
            menuTextName: props.passedState.menuTextName
        };
    }

    componentDidMount(){
        // console.log(this.state.drinks2);
        this.whichFlavorIsIt();
    }

    whichFlavorIsIt = () =>{
       let newSyrups = this.state.drinks2.filter(function (item) {
            return item.type === "syrup"
        });

        let newSFSyrups = this.state.drinks2.filter(function (item) {
            return item.type === "sf syrup"
        });

        let newSauce = this.state.drinks2.filter(function (item) {
            return item.type === "sauce"
        });

        let newSFSauce = this.state.drinks2.filter(function (item) {
            return item.type === "sf sauce"
        });

        this.setState({syrups: newSyrups});
        this.setState({sfsyrups: newSFSyrups});
        this.setState({sauces: newSauce});
        this.setState({sfsauces: newSFSauce});
    }


    render() {
        if (!this.state.drinks1 && !this.state.newTextInformation1 && !this.state.syrups) {
            return <h1>Loading information...</h1>
        }
        console.log(this.state.syrups);

        let passedName = "Ingredients & More";
        return (
            <div>
                <MenuTextCard menuTextName={passedName} information={this.state.newTextInformation1} />

                <div className="test">
                    {this.state.drinks1.map(function (item, i) {

                        let whichDivIsIt2 = item.div;
                        //Loading in different cards depending on what type of information comes from the database
                        return <div key={i}>
                            {whichDivIsIt2 === 1 ? (<DrinksCards1 item={item} />)
                                : whichDivIsIt2 === 2 ? (<DrinksCards2 item={item} />)
                                    : (<DrinksCards3 item={item} />)}

                        </div>

                    })}
                </div>

                <div className="space"></div>

                <div className="menu-more-line-separator-wrapper">
                    <div className="menu-more-line-separator"></div>
                </div>

                <div className="test">
                    <div className="menu-more-flavor-list-wrapper">
                        <div className="menu-more-flavor-list-name">Syrups</div>

                        {this.state.syrups ? 
                        (<div>
                            {this.state.syrups.map(function (item, i) {
                                return  <div key={i} className="menu-more-flavor-list-item">-{item.name}</div>
                            })}

                        </div>) :

                        (<h2>Loading....</h2>)}
                       


                    </div>

                        <div className="menu-more-flavor-list-wrapper">
                        <div className="menu-more-flavor-list-name">Sugar Free Syrups</div>
                        {this.state.syrups ? 
                        (<div>
                            {this.state.sfsyrups.map(function (item, i) {
                                return  <div key={i} className="menu-more-flavor-list-item">-{item.name}</div>
                            })}

                        </div>) :

                        (<h2>Loading....</h2>)}
                    </div>

                    <div className="menu-more-flavor-list-wrapper">
                        <div className="menu-more-flavor-list-name">Sauces And Sugar Free Sauces</div>

                        {this.state.sauces ? 
                        (<div>
                            {this.state.sauces.map(function (item, i) {
                                return  <div key={i} className="menu-more-flavor-list-item">-{item.name}</div>
                            })}

                            <div className="menu-more-flavor-separator"></div>

                            {this.state.sfsauces.map(function (item, i) {
                                return  <div key={i} className="menu-more-flavor-list-item">-{item.name}</div>
                            })}

                        </div>) :
                        
                        (<h2>Loading....</h2>)}


                    </div>

                </div>



            </div>
        )
    }

};

export default menuMore;

