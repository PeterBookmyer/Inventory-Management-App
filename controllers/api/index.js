const router = require("express").Router();

const userRoutes = require("./user-routes");
const inventoryRoutes = require("./inventory-routes");

router.use("/users", userRoutes);
router.use("/inventory", inventoryRoutes);

module.exports = router;
