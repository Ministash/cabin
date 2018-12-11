const router = require("express").Router();
const lattes = require("./lattes");


router.use("/routes", lattes);

module.exports = router;
