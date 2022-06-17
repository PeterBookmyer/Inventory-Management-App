const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { Pricing, Inventory, Users } = require("../../models");

// endpoint for "/api/inventory"

// add an inventory item
router.post("/", withAuth, async (req, res) => {
  try {
    const invData = await Inventory.create(req.body);
    // set inventory_id value frore pricing table
    req.body.inventory_id = invData.dataValues.id;
    // add pricing row with association to new item
    const priceData = await Pricing.create(req.body);
    res.status(200).json(req.body);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update an inventory item
router.put("/:id", withAuth, async (req, res) => {
  try {
    // update inventory table item
    const newInvData = await Inventory.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    // update pricing table item
    const newPriceData = await Pricing.update(req.body, {
      where: {
        inventory_id: req.params.id,
      },
    });
    res.status(200).json(newInvData);
  } catch {
    res.status(400).json(err);
  }
});

module.exports = router;
