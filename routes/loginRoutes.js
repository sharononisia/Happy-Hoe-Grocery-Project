const express = require("express");
const passport = require("passport"); // Ensure you require passport
const router = express.Router();

// Route to render the login page
router.get("/login", (req, res) => {
  res.render("login");
});

// Route to handle login
router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  (req, res) => {
    req.session.user = req.user; // Assign session to the logged-in user

    // Redirect based on the user's role
    if (req.user.role === "manager") {
      // res.send("Welcome to the Manager's dashboard!");
      res.redirect("/manager-dashboard");
    } else if (req.user.role === "sales-agent") {
      // res.send("Welcome to the Sales Agent's dashboard!");
      res.redirect("/sales-agent-dashboard");
    } else {
      res.send("User with that role does not exist in the system");
    }
  }
);

module.exports = router;
