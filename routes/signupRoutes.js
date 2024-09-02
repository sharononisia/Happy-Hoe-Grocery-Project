const express = require("express");
const router = express.Router();
const Signup = require("../models/signup");

// Route to render signup page
router.get("/signup", (req, res) => {
  res.render("register");
});

// Route to handle user registration
router.post("/signup", async (req, res) => {
  try {
    const existingUser = await Signup.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).send("A user with this email already exists!");
    }

    const user = new Signup({
      username: req.body.username,
      email: req.body.email,
      role: req.body.role,
      branch: req.body.branch
    });

    Signup.register(user, req.body.password, (err) => {
      if (err) {
        return res.status(400).render("register", { title: "Signup" });
      }
      res.redirect("/login");
    });
  } catch (err) {
    console.error("Signup user error:", err);
    res.status(400).render("register", { title: "Signup" });
  }
});

// Route to render all users
router.get("/all-users", async (req, res) => {
  try {
    const signups = await Signup.find(); // Fetch all signups from the database
    res.render("all-users", { signups: signups || [] });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.render("all-users", { signups: [] }); // Render with empty array on error
  }
});

module.exports = router;
