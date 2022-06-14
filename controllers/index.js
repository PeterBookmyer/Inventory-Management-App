const router = require("express").Router();

const homeRoutes = require("./home.js");

router.use("/", homeRoutes);

module.exports = router;
