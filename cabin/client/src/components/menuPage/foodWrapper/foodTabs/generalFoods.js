import React from "react";
import "./generalFoods.css";
import {FoodCards1} from '../menuFoodCards/foodCards/index';


class generalFoods extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foods: props.passedState.foods
        };
    }

    componentDidMount(){
        console.log(this.state.foods);
    }


    render() {
        console.log(this.state.foods);
        //Making sure that all our information is collected so the program doesn't crash when nothing is returned
        if (!this.state.foods) {
            return <h1>Loading information...</h1>
        }
        return (
            <div>

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

