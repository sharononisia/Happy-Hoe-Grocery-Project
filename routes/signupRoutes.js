const express = require("express");
const router = express.Router();

const signup = require("../models/signup");

router.get("/signup", (req, res) => {
  res.render("register");
});
// Register admin
router.post("/signup", async (req, res) => {
  try {
    // added
    const existingUser = await signup.findOne({ email: req.body.email }); // check if the user already exist
    if (existingUser) {
      return res
        .status(400)
        .send("Not registered, a user with a similar email already exists!");
    }
    const user = new signup(req.body);
    // added
    await signup.register(user, req.body.password, (err) => {
      // used to register a user who will later login
      if (err) {
        throw err;
      }
      res.redirect("/login");
    });
  } catch (err) {
    res.status(400).render("register", { tittle: "Signup" });
    console.log("Signup user error", err);
  }
});

module.exports = router;
