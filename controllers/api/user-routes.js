const router = require("express").Router();
const { Users } = require("../../models/");
const bcrypt = require("bcrypt");


// endpoint for /api/users/

// login route
router.post("/login", async (req, res) => {
  try {
    const userData = await Users.findOne({ where: { username: req.body.username } });
    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }
    const validPassword = await bcrypt.compare(req.body.password, userData.password);
    console.log('hello:', userData.password);
    // const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      req.session.adminPriv = userData.admin;
      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// logout route
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// add new user
router.post("/new", async (req, res) => {
  try {
    const newUser = await Users.create(req.body);
    res.status(200).json(req.body);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// update user
router.put("/edit/:id", async (req, res) => {
  try {
    const update = await Users.update(req.body, {
      where: { id: req.params.id },
    });
    res.render(update, {
      layout: "dashboard",
      post,
    });
  } catch (err) {
    res.redirect("login");
  }
});

module.exports = router;
