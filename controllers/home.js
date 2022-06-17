const router = require("express").Router();
const { Pricing, Inventory, Users } = require("../models");

router.get("/", async (req, res) => {
  try {
    res.render("home");
  } catch (err) {
    console.log(err);
  }
});
// get all users
router.get("/users", async (req, res) => {
  try {
    const userData = await Users.findAll();

    const allUsers = userData.map((users) => users.get({ plain: true }));
    res.render("all_users", {
      allUsers,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.redirect("login");
    // res.status(400).json(err);
  }
});

// get one user
router.get("/users/:id", async (req, res) => {
  try {
    const oneUser = await Users.findOne({
      where: { id: req.params.id },
    });

    const user = oneUser.get({ plain: true });
    res.render("one_user", {
      user,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    // res.redirect("login");
    console.log(err);
    res.status(400).json(err);
  }
}),

router.get("/inventory", async (req, res) => {
  try {
    const inventoryData = await Inventory.findAll({
      include: [
        {
          model: Pricing,
          attributes: ["cost", "sales_price", "order_link", "inventory_id"],
        },
      ],
    });
    const allInventory = inventoryData.map((inventory) =>
      inventory.get({ plain: true })
    );
    res.render("all_inventory", {
      allInventory,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one item
router.get("/inventory/:id", async (req, res) => {
  try {
    const inventoryData = await Inventory.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: Pricing,
          attributes: ["cost", "sales_price", "order_link", "inventory_id"],
        },
      ],
    });
    const inventoryItem = inventoryData.get({ plain: true });
    res.render("one_inventory", {
      inventoryItem,
      countVisit: req.session.countVisit,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
