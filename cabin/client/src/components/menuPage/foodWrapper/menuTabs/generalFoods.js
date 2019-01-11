import React from "react";
import "./generalFoods.css";


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
                            <div>{item.name}</div>
                        </div>

                    })}
                </div>
            </div>


        )
    }

};

export default generalFoods;

