const express = require("express");
const router = express.Router();


// Logout route
router.get("/logout", (req, res) => {
    if (req.session) {
      req.session.destroy((err) => {
        if (err) {
          return res.status(500).send("Error logging out");
        }
        res.redirect("/login");
      });
    } else {
      res.send("you do not have an on going session");
    }
  });

  module.exports = router;