import React from "react";
import "./generalFoods.css";
import {FoodCards1, FoodCards3} from '../menuFoodCards/foodCards/index';
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

    componentDidMount(){
        this.nameChanger();
    }

    nameChanger = () => {
        if(this.state.menuTextName === "Salad"){
            this.setState({menuTextName: "Salad & Soup"});
        }
    }


    render() {
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
                        {item.div === 2 ? <FoodCards1 item={item}/> : <FoodCards3 item={item}/>}
                        </div>
                    })}
                </div>
            </div>


        )
    }

};

export default generalFoods;

