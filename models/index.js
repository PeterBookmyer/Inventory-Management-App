const Users = require("./Users");
const Pricing = require("./Pricing");
const Inventory = require("./Inventory");

Inventory.hasOne(Pricing, {
  foreignKey: "inventory_id",
});

Pricing.belongsTo(Inventory, {
  foreignKey: "inventory_id",
});

module.exports = { Users, Pricing, Inventory };
