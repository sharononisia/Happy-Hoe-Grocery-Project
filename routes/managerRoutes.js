const express = require('express');
const router = express.Router();


router.get('/manager',  (req, res) => {
    res.render('manager-dashboard', { title: "Manager" });
})



module.exports = router;