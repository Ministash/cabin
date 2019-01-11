import React from "react";
import "./generalFoods.css";
import {FoodCards1} from '../menuFoodCards/foodCards/index';
import {MenuTextFoodCard1} from '../menuFoodCards/menuTextFoodCards/index'


class generalFoods extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foods: props.passedState.foods,
            menuTextName: props.passedState.menuTextName,
            newTextInformation: props.passedState.menuText,

        };
    }

    // componentDidMount(){
    //     console.log(this.state.foods);
    // }


    render() {
        console.log(this.state.newTextInformation);
        //Making sure that all our information is collected so the program doesn't crash when nothing is returned
        if (!this.state.foods && !this.state.newTextInformation) {
            return <h1>Loading information...</h1>
        }
        return (
            <div>

            <MenuTextFoodCard1 menuTextName={this.state.menuTextName} information={this.state.newTextInformation}/>

                <div className="test">
                    {this.state.foods.map(function (item, i) {

                        // let whichDivIsIt2 = item.div;
                        //Loading in different cards depending on what type of information comes from the database
                        return <div key={i}>
                           <FoodCards1 item={item}/>
                        </div>
                    })}
                </div>
            </div>


        )
    }

};

export default generalFoods;

