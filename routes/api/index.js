const router = require("express").Router();
const drinks = require("./drinks");
const foods = require("./foods");

//The first part of this function is specifying the what the api route will use to load the variable.
//So "/drinks" is loading drinks the variable. If you change the first part ("/drinks") you need to 
//change the other places that the route is being used.
router.use("/drinks", drinks);
router.use("/foods", foods);


module.exports = router;
