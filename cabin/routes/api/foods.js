const router = require("express").Router();
const db = require("../../models");

router.route("/:id")
    .get(function (req, res) {
        
        
        let sendingData = {}

            db.Food.findAll({
                where: { category: req.params.id }
            })
                .then(function (data) {
                    sendingData.foods = data;

                    db.DrinksMenuText.findAll({
                        where: { category: req.params.id }
                    }).then(function (data) {

                        sendingData.text = data
                        res.send({ generalFoods: sendingData });
                    })
                })
    });

module.exports = router;