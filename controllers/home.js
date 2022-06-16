const router = require("express").Router();
const { Pricing, Inventory, Users } = require("../models");
const withAuth = require("../utils/auth");

// get all users
router.get("/users", async (req, res) => {
  try {
    const userData = await Users.findAll();

    const allUsers = userData.map((users) =>
    users.get({ plain: true })
  );
  res.render('all_users', {
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
router.get("/users/:id", withAuth, async (req, res) => {
  try {
    const oneUser = await Users.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: Users,
          attributes: [
            "first_name",
            "last_name",
            "email",
            "username",
            "password",
            "admin",
          ],
        },
      ],
    });
    res.render(oneUser, {
      layout: "dashboard",
      Users,
    });
  } catch (err) {
    res.redirect("login");
  }
}),

// get all inventory
router.get("/inventory", async (req, res) => {
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

// GET one item
router.get("/inventory/:id", async (req, res) => {
  try {
    const inventoryData = await Inventory.findByPk(req.params.id, {
      include: [
        {
          model: Pricing,
          attributes: ["id", "name", "current_stock", "cost", "sales_price"],
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

module.exports = router;
