const router = require("express").Router();
const cabinRoutes = require("./routes");


router.use("/routes", cabinRoutes);

module.exports = router;
