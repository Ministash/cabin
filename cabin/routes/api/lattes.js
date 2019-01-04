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
        if (req.params.id === "1") {
            db.Lattes.findAll({})
                .then(function (data) {
                    res.send({ lattes: data });
                });

        }else if(req.params.id === "2"){
            db.Coffee.findAll({})
            .then(function (data) {
                res.send({ coffee: data });
            });
        }
    });

module.exports = router;