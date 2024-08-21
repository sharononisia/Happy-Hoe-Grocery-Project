const express = require('express');
const router = express.Router();


router.get('/sales_dashboard',  (req, res) => {
    res.render('sales-agentdashboard', { title: "Sales Agent" });
})



module.exports = router;