const express = require("express");
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login");

const signup = require("../models/signup");

// // home route
// router.get("/", (req, res) => {
//   // res.send("Welcome to HHG Management System");
//   res.render("home");
// });


// // manager route
// // connectEnsureLogin.ensureLoggedIn(),
// router.get("/manager-dashboard", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
//   // res.send("Welcome to HHG Management System");
//   res.render("manager-dashboard");
// });

// // sales agent route
// router.get("/sales-dashboard", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
//   // res.send("Welcome to HHG Management System");
//   res.render("sales-agent-dashboard");
// });

// get all users
router.get("/all-users", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
  try {
    if (req.session.user.role === "manager") { // ensure that only managers access all-users page
      const allUsers = await signup.find().sort({ $natural: -1 });
      res.render("all-users", {
        users: allUsers,
      });
    }else {
      res.send("Only Managers are allowed to access this page")
    }
  } catch (error) {
    res.status(400).send("Unable to find users in your database", error);
  }
});

// edit user
// get user update form
router.get("/update-user/:id", async (req, res) => {
  try {
    const dbUser = await signup.findOne({ _id: req.params.id });
    res.render("update-user", {
      user: dbUser,
    });
  } catch (err) {
    res.status(400).send("Unable to find user in the database");
  }
});

// post updated user
router.post("/update-user", async (req, res) => {
  try {
    await signup.findOneAndUpdate({ _id: req.query.id }, req.body);
    res.redirect("/all-users");
  } catch (err) {
    res.status(404).send("Unable to update user in the database");
  }
});

// delete User
router.post("/delete-user", async (req, res) => {
  try {
    await signup.deleteOne({ _id: req.body.id });
    res.redirect("back");
  } catch (err) {
    res.status(400).send("Unable to delete user in the database");
  }
});

module.exports = router;