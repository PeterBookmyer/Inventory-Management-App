const router = require("express").Router();
const { Pricing, Inventory, Users } = require("../models");
const withAuth = require("../utils/auth");

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
  router.get("/inventory", async (req, res) => {
    try {
      const inventoryData = await Inventory.findAll({
        include: [
          {
            model: Pricing,
            attributes: ["cost", "sales_price", "order_link", "inventory_id"],
          },
        ],
        // }); //commented out so that server can run
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

// GET one item
router.get("/inventory/:id", async (req, res) => {
  try {
    const inventoryData = await Inventory.findOne(req.params.id, {
      include: [
        { attributes: ["name", "image_file", "current_stock"] },
        {
          model: Pricing,
          attributes: ["cost", "sales_price", "order_link", "inventory_id"],
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
