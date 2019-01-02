const router = require("express").Router();
const db = require("../../models");

router.route("/:id")
    .post(function (req, res) {
        let newLatte = {
            name: "Honey Latte",
            price1: "4.20",
            price2: "4.80",
            price3: "5.20",
            flavor: "Honey + Milk",
            div: 1
        }

        db.Lattes.create({
            name: newLatte.name,
            price1: newLatte.price1,
            price2: newLatte.price2,
            price3: newLatte.price3,
            flavor: newLatte.flavor,
            div: newLatte.div
        }).then(function (data) {
            res.json(data);
        })
    })

    .get(function (req, res) {
        if (req.params.id === "1") {
            db.Lattes.findAll({})
                .then(function (data) {
                    res.send({ lattes: data });
                });

        }
    });

module.exports = router;