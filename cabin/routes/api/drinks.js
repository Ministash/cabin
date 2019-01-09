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

        if(req.params.id === "Smoothies"){
            let database1 = "Smoothies";
            let database2 = "BreakfastSmoothies";
            let Smoothies = db[database1];
            let BreakfastSmoothies = db[database2];

            autoRSmoothies(Smoothies, BreakfastSmoothies);
        }else if(req.params.id === "More"){
            let database1 = "More";
            let database2 = "SauceNSyrupList";
            let More = db[database1];
            let SauceNSyrupList = db[database2];
            autoRMore(More, SauceNSyrupList);
        }else{
            let database = req.params.id;
            let pairedDatabaseName = db[database];
            autoR(pairedDatabaseName);
        }

        function autoR(changingDrink) {
            let sendingData = {}

            changingDrink.findAll({})
                .then(function (data) {

                    sendingData.drinks = data;

                    db.DrinksMenuText.findOne({
                        where: { category: req.params.id }
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

        function autoRMore(changingDrink1, changingDrink2) {
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
                                where: { category: "more" }
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