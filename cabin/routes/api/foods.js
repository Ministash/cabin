const router = require("express").Router();
const db = require("../../models");

router.route("/:id")
    .get(function (req, res) {
        
        if(req.params.id === "Criossants"){
            let Criossants = "Criossants";
            let Burrito = "Burrito";

            autoRBreakfast(Criossants, Burrito);
        }else{
            console.log("second option");
            autoR();
        }
        

        //First ridiculous function for finding data
        function autoR() {

        let sendingData = {
            text: {
                text: null
            }
        }

            db.Food.findAll({
                where: { category: req.params.id }
            })
                .then(function (data) {
                    sendingData.foods = data;

                    db.DrinksMenuText.findAll({
                        where: { category: req.params.id }
                    }).then(function (data) {
                        sendingData.text.text = data[0].dataValues.text;
                        res.send({ generalFoods: sendingData });
                    })
                })
            }

            //Second ridiculous function for finding data
            function autoRBreakfast(changingFood1, changingFood2) {
                let sendingData = {
                    foods: {
                        foods1: null,
                        foods2: null,
                    },
                    text: {
                        text: null
                    }
                }
    
                db.Food.findAll({
                    where: {category: changingFood1}
                })
                    .then(function (data) {
                        sendingData.foods.foods1 = data;
                    })
    
                    .then(function () {
                        db.Food.findAll({
                            where: {category: changingFood2}
                        })
                            .then(function (data) {
                                sendingData.foods.foods2 = data;
                            })
                            .then(function () {
    
                                db.DrinksMenuText.findAll({
                                    where: { category: req.params.id }
                                })
                                    .then(function (data) {
    
                                        sendingData.text.text = data;

                                        res.send({ generalFoods: sendingData });
                                    })
    
                            })
    
    
                    })
            }
    });

module.exports = router;