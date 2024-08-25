//dependencies
const express = require("express");
const router = express.Router();

// Route to render the login page
router.get("/cereal", (req, res) => {
    res.render("product");
  });



module.exports = router;