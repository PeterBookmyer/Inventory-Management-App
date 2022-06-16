const router = require("express").Router();
const { Pricing, Inventory, Users } = require("../models");

router.get("/", async (req, res) => {
  try {
    const inventoryData = await Inventory.findAll({
      include: [
        {
          model: Pricing,
          attributes: ["name", "description", "price"],
        },
      ],
    });

    const inventoryItem = Inventory.map((inventoryItem) =>
      inventoryItem.get({ plain: true })
    );

    req.session.save(() => {
      if (req.session.countVisit) {
        req.session.countVisit++;
      } else {
        req.session.countVisit = 1;
      }

      res.render("homepage", {
        inventoryItem,
        countVisit: req.session.countVisit,
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one gallery
router.get("/inventory/:id", async (req, res) => {
  try {
    const inventoryData = await Inventory.findByPk(req.params.id, {
      include: [
        {
          model: Item,
          attributes: ["id", "name", "quantity", "COG", "price"],
        },
      ],
    });

    const inventory = Inventory.get({ plain: true });
    res.render("inventory", {
      inventory,
      countVisit: req.session.countVisit,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one item
router.get("/item/:id", async (req, res) => {
  try {
    const itemData = await Item.findByPk(req.params.id);

    const item = itemData.get({ plain: true });

    res.render("item", {
      item,
      countVisit: req.session.countVisit,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
