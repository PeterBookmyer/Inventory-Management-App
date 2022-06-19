const router = require("express").Router();
const { Pricing, Inventory, Users } = require("../models");

// home route
router.get("/", async (req, res) => {
  try {
    res.render("home", {
      loggedIn: req.session.logged_in,
      adminPriv: req.session.admin,
    });
  } catch (err) {
    console.log(err);
  }
});

// login page
router.get("/login", async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.render("home", {
        loggedIn: req.session.logged_in,
      });
    } else {
      res.render("login", {
        loggedIn: req.session.logged_in,
      });
    }
  } catch(err) {
    console.log(err);
  }
})

// all users page
router.get("/users", async (req, res) => {
  try {
    if (req.session.logged_in) {
      const userData = await Users.findAll();
      const allUsers = userData.map((users) => users.get({ plain: true }));
      res.render("all_users", {
        allUsers,
        loggedIn: req.session.logged_in,
        adminPriv: req.session.adminPriv,
      });
    } else {
      res.render("login", {
        loggedIn: req.session.logged_in,
      });
    };
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// one user page
router.get("/users/:id", async (req, res) => {
  try {
    if (req.session.logged_in) {
      const oneUser = await Users.findOne({
        where: { id: req.params.id },
      });
  
      const user = oneUser.get({ plain: true });
      res.render("one_user", {
        user,
        loggedIn: req.session.logged_in,
      });
    } else {
      res.render("login", {
        loggedIn: req.session.logged_in,
      });
    };
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}),

// all inventory page
router.get("/inventory", async (req, res) => {
  try {
    if (req.session.logged_in) {
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
        loggedIn: req.session.logged_in,
      });
    } else {
      res.render("login", {
        loggedIn: req.session.logged_in,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one item
router.get("/inventory/:id", async (req, res) => {
  try {
    if (req.session.logged_in) {
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
        loggedIn: req.session.logged_in,
      });
    } else {
      res.render("login", {
        loggedIn: req.session.logged_in,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
