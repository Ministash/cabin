const router = require("express").Router();
const db = require("../../models");

router.route("/:id")
    .post(function (req, res) {

        let drinkObjArray = [
            {
                name: "Honey Latte",
                flavor: "Honey and Milk"
            },
            {
                name: "Mexican Mocha",
                flavor: "Spiced Mocha"
            },
            {
                name: "Matt & Traci",
                flavor: "Caramel & Vanilla"
            },
            {
                name: "Maple Leaf",
                flavor: "Caramel & Maple"
            },
            {
                name: "Brown Bear",
                flavor: "Caramel & Mocha"
            },
            {
                name: "Black & White",
                flavor: "White Chocolate and Mocha"
            },
            {
                name: "Black Forest",
                flavor: "Mocha & Raspberry"
            },
            {
                name: "Hidden Trail",
                flavor: "Mocha, Hazelnut & Maple"
            },
            {
                name: "Lumberjack",
                flavor: "Mocha & Coconut"
            },
            {
                name: "Shuggie",
                flavor: "White Chocolate & Amaretto"
            },
            {
                name: "Trek",
                flavor: "White Chocolate & Hazelnut"
            }
        ]

        
        
        let newArr = [];
        let price1 = "4.20";
        let price2 = "4.80";
        let price3 = "5.20";
        
        for(let i = 0; i < drinkObjArray.length; i++){
            let temArr = {
                name: drinkObjArray[i].name,
                price1: price1,
                price2: price2,
                price3: price3,
                flavor: drinkObjArray[i].flavor,
                div: 1
            }
        
            newArr.push(temArr);
        
        }

        newArr.map(function(item){
            db.Lattes.create({
                name: item.name,
                price1: item.price1,
                price2: item.price2,
                price3: item.price3,
                flavor: item.flavor,
                div: item.div
            }).then(function (data) {
                res.json(data);
            })
            
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