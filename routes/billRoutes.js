const express = require("express");
const router = express.Router();

router.get('/bill',  (req, res) => {
    res.render('receipt', { title: "Receipt" });
})





module.exports = router;