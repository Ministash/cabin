import React from "react";
import "./generalFoods.css";
import { FoodCards1, FoodCards2 } from '../menuFoodCards/foodCards';
import { MenuTextFoodCard1, MenuTextFoodCard2 } from '../menuFoodCards/menuTextFoodCards'


class generalFoods extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foods1: props.passedState.foods.foods1,
            foods2: props.passedState.foods.foods2,
            menuTextName: props.passedState.menuTextName,
            newTextInformation1: props.passedState.menuText[0].text,
            newTextInformation2: props.passedState.menuText[1].text,

        };
    }

    // componentDidMount(){
    //     console.log(this.state.foods1);
    //     console.log(this.state.foods2);
    //     console.log(this.state.newTextInformation1);
    //     console.log(this.state.newTextInformation2);
    // }


    render() {
        //Making sure that all our information is collected so the program doesn't crash when nothing is returned
        if (!this.state.foods1 && !this.state.newTextInformation1) {
            return <h1>Loading information...</h1>
        }
        let passedName = "Burritos";

        return (
            <div>

                <MenuTextFoodCard1 menuTextName={this.state.menuTextName} information={this.state.newTextInformation1} />

                <div className="test">
                    {this.state.foods1.map(function (item, i) {

                        // let whichDivIsIt2 = item.div;
                        //Loading in different cards depending on what type of information comes from the database
                        return <div key={i}>
                            <FoodCards1 item={item} />
                        </div>
                    })}
                </div>


                <MenuTextFoodCard2 passedName={passedName} information={this.state.newTextInformation2} />

                <div className="test">
                    {this.state.foods2.map(function (item, i) {

                        // let whichDivIsIt2 = item.div;
                        //Loading in different cards depending on what type of information comes from the database
                        return <div key={i}>
                            <FoodCards2 item={item} />
                        </div>
                    })}
                </div>
            </div>


        )
    }

};

export default generalFoods;

