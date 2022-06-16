const router = require("express").Router();
const { Users } = require("../../models/");
const withAuth = require("../utils/auth");

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post("/new", withAuth, async (req, res) => {
  try {
    const newUser = await Users.create(req.body).then((user) => {
      return Users.afterCreate(newUser);
    });
    res.render(newUser, {
      layout: "dashboard",
    });
  } catch (err) {
    res.redirect("dashboard");
  }
}),
  router.put("/edit/:id", withAuth, async (req, res) => {
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
