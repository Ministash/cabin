const router = require("express").Router();
const db = require("../../models");

router.route("/now")

.post(function(req, res){
    // let newLatte = {
    //     name: "Matt and Tracy",
    //     price: 5,
    //     flavor: "Caramel and Vanilla",
    //     temperature: "Hot or Cold"
    // }

    // db.Lattes.create({
    //     name: newLatte.name,
    //     price: newLatte.price,
    //     flavor: newLatte.flavor,
    //     temperature: newLatte.temperature
    // }).then(function (data){
    //     res.json(data);
    // })
})

.get(function(req, res){
    let id = 1;
        db.Lattes.findOne({
            where: {
                id: id
            }
        })
        .then(function (response) {
            console.log("Hunter");
            res.send(response);
        });
    });
    
module.exports = router;