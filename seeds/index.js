const seedInventory = require("./inventory_seeds");
const seedUsers = require("./users_seeds");
const seedPricing = require("./pricing_seeds");
const database = require("../db/schema.sql");
const sequelize = require("../config/connection");
const { Inventory, Users, Pricing } = require("../models");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedInventory();
  console.log("\n----- Inventory SEEDED -----\n");
  await seedUsers();
  console.log("\n----- Users SEEDED -----\n");
  await seedPricing();
  console.log("\n----- Pricing SEEDED -----\n");
  process.exit(0);
};
seedAll();
