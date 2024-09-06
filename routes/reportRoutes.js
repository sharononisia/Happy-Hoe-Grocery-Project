const express = require("express");
const router = express.Router();
const Produce = require('../models/produce'); // Import the Produce model
const connectEnsureLogin = require("connect-ensure-login");

// For managers only
router.get("/reports", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
    req.session.user = req.user;
    
    if (req.user.role === 'manager') {
        try {
            // Get selected produce from query parameter
            let selectedProduce = req.query.searchProduce || '';

            // Query for returning all tonnage and revenue of a produce
            let items = await Produce.find({ produceName: selectedProduce });

            // Aggregate total grains
            let totalGrains = await Produce.aggregate([
                { $match: { produceType: 'grain' } },
                { $group: {
                    _id: null,
                    stockQuantity: { $sum: "$tonnage" },
                    totalExpense: { $sum: { $multiply: [ "$produceCost", "$tonnage" ] }},
                    totalProjectedRevenue: { $sum: { $multiply: [ "$sellingPrice", "$tonnage" ] }}
                }}
            ]);

            // Aggregate total legumes
            let totalLegumes = await Produce.aggregate([
                { $match: { produceType: 'legume' } },
                { $group: {
                    _id: null,
                    stockQuantity: { $sum: "$tonnage" },
                    totalExpense: { $sum: { $multiply: [ "$produceCost", "$tonnage" ] }},
                    totalProjectedRevenue: { $sum: { $multiply: [ "$sellingPrice", "$tonnage" ] }}
                }}
            ]);

            // Get total quantity and cost of a selected produce
            let totalCrop = await Produce.aggregate([
                { $match: { produceName: selectedProduce }},
                { $group: {
                    _id: "$produceName",
                    stockQuantity: { $sum: "$tonnage" },
                    totalExpense: { $sum: { $multiply: [ "$produceCost", "$tonnage" ] }},
                    totalProjectedRevenue: { $sum: { $multiply: [ "$sellingPrice", "$tonnage" ] }}
                }}
            ]);

            // Render the reports view
            res.render("reports", {
                title: 'Reports',
                produces: items,
                totalgrains: totalGrains[0] || {},
                totallegumes: totalLegumes[0] || {},
                totalcrop: totalCrop[0] || {},
            });
        } catch (error) {
            res.status(400).send("Unable to find items in the database");
            console.log(error);
        }
    } else {
        res.send("This page is only accessed by managers");
    }
});

module.exports = router;
