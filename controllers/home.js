const router = require("express").Router();
const { Pricing, Inventory, Users } = require("../models");

router.get("/", async (req, res) => {
  try {
    const inventoryData = await Inventory.findAll({
      include: [
        {
          model: Item,
          attributes: ["item.name", "description", "price"],
        },
      ],
    });

    const gallery = inventoryData.map((gallery) =>
      gallery.get({ plain: true })
    );

    req.session.save(() => {
      if (req.session.countVisit) {
        req.session.countVisit++;
      } else {
        req.session.countVisit = 1;
      }

      res.render("homepage", {
        galleries,
        countVisit: req.session.countVisit,
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one gallery
router.get("/gallery/:id", async (req, res) => {
  try {
    const inventoryData = await Inventory.findByPk(req.params.id, {
      include: [
        {
          model: Item,
          attributes: ["id", "itemname", "description", "price"],
        },
      ],
    });

    const gallery = inventory.get({ plain: true });
    res.render("gallery", {
      gallery,
      // We are not incrementing the 'countVisit' session variable here
      // but simply sending over the current 'countVisit' session variable to be rendered
      countVisit: req.session.countVisit,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one painting
router.get("/item/:id", async (req, res) => {
  try {
    const itemData = await Item.findByPk(req.params.id);

    const item = itemData.get({ plain: true });

    res.render("item", {
      item,
      // We are not incrementing the 'countVisit' session variable here
      // but simply sending over the current 'countVisit' session variable to be rendered
      countVisit: req.session.countVisit,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
