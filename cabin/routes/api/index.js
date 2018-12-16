const router = require("express").Router();
const lattes = require("./lattes");


router.use("/lattes", lattes);


module.exports = router;
