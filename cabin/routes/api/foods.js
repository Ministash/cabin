const router = require("express").Router();
const db = require("../../models");

router.route("/:id")
    .get(function (req, res) {
        console.log(req.params.id);
        
            db.Food.findAll({
                where: { category: req.params.id }
            })
                .then(function (data) {
                    let sendingData = data;
                    res.send({ generalFoods: sendingData });
                })
    });

module.exports = router;