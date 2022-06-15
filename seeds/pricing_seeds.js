const { Pricing } = require("../models");

const pricingData = [
  {
    cost: 2.33,
    sales_price: 9.0,
    order_link: "https://www.uprinting.com",
    inventory_id: 1,
  },
  {
    cost: 2.33,
    sales_price: 10.0,
    order_link: "https://www.uprinting.com",
    inventory_id: 2,
  },
  {
    cost: 15.0,
    sales_price: 50.0,
    order_link: "https://www.uprinting.com",
    inventory_id: 3,
  },
  {
    cost: 1.54,
    sales_price: 8.0,
    order_link: "https://www.uprinting.com",
    inventory_id: 4,
  },
  {
    cost: 9.67,
    sales_price: 40,
    order_link: "https://www.uprinting.com",
    inventory_id: 5,
  },
  {
    cost: 3.15,
    sales_price: 25.0,
    order_link: "https://www.uprinting.com",
    inventory_id: 6,
  },
  {
    cost: 15,
    sales_price: 40,
    order_link: "https://www.uprinting.com",
    inventory_id: 7,
  },
  {
    cost: 1.35,
    sales_price: 20.0,
    order_link: "https://www.uprinting.com",
    inventory_id: 8,
  },
  {
    cost: 10.35,
    sales_price: 35,
    order_link: "https://www.uprinting.com",
    inventory_id: 9,
  },
  {
    cost: 10.35,
    sales_price: 35,
    order_link: "https://www.uprinting.com",
    inventory_id: 10,
  },
];

const seedPricing = () => Pricing.bulkCreate(pricingData);

module.exports = seedPricing;
