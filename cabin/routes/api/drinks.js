const router = require("express").Router();
const db = require("../../models");

router.route("/:id")
    .post(function (req, res) {

        db.Coffee.create({
            name: "Cabin Coffee",
            price1: "1.85",
            price2: "2.00",
            price3: "2.15",
            madeW: "Fresh Ground Beans",
            div: 1
        }).then(function (data) {
            res.json(data);
        })
    })

    .get(function (req, res) {

        switch (req.params.id) {
            case "1": {
                let Lattes = db.Lattes;
                autoR(Lattes);
            };
                break;
            case "2": {
                let Coffee = db.Coffee;
                autoR(Coffee);
            };
                break;
            case "3": {
                let Tea = db.Tea;
                autoR(Tea);
            };
                break;
            case "4": {
                let Blended = db.Blended;
                autoR(Blended);
            };
                break;
            case "5": {
                let Smoothies = db.Smoothies;
                let BreakfastSmoothies = db.BreakfastSmoothies;
                autoRSmoothies(Smoothies, BreakfastSmoothies);
            };
                break;
            default: autoR(Lattes);
                break;
        }

        function autoR(changingDrink) {
            let sendingData = {}

            changingDrink.findAll({})
                .then(function (data) {

                    sendingData.drinks = data;

                    db.DrinksMenuText.findOne({
                        where: { id: req.params.id }
                    })
                        .then(function (data) {
                            sendingData.text = data
                            res.send({ generalDrinks: sendingData });
                        })

                });
        }

        function autoRSmoothies(changingDrink1, changingDrink2) {
            let sendingData = {
                drinks: {
                    drinks1: null,
                    drinks2: null,
                },
                text: {
                    text: null
                }
            }

            changingDrink1.findAll({})
                .then(function (data) {
                    sendingData.drinks.drinks1 = data
                })

                .then(function () {

                    changingDrink2.findAll({})
                        .then(function (data) {

                            sendingData.drinks.drinks2 = data
                        })
                        .then(function () {

                            db.DrinksMenuText.findAll({
                                where: { category: "smoothies" }
                            })
                                .then(function (data) {

                                    sendingData.text.text = data;

                                    console.log(sendingData.text.text);
                                    res.send({ generalDrinks: sendingData });
                                })

                        })


                })
        }
    });

module.exports = router;