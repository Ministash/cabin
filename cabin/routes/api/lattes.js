const router = require("express").Router();
const db = require("../../models");

router.route("/")

.post(function(req, res){
    let newLatte = {
        name: "Lodge",
        price1: 4.23,
        price2: 4.88,
        price3: 5.23,
        flavor: "Mocha and Peppermint",
        temperature: 3
    }

    db.Lattes.create({
        name: newLatte.name,
        price1: newLatte.price1,
        price2: newLatte.price2,
        price3: newLatte.price3,
        flavor: newLatte.flavor,
        temperature: newLatte.temperature
    }).then(function (data){
        res.json(data);
    })
})

.get(function(req, res){
        db.Lattes.findAll({})
        .then(function (data) {
            res.send({lattes: data});
        });
    });
    
module.exports = router;