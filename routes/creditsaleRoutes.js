const express = require('express');
const router = express.Router();
//const connectEnsureLogin = require('connect-ensure-login');

// import model
const Credit = require('../models/credit');

router.get('/creditsale',  (req, res) => {
    res.render('credit-sale', { title: "Credit" });
})

router.post('/creditsale', async (req, res) => {
    try {
        const newCredit = new Credit(req.body);
        await newCredit.save();
        res.redirect('/Credit-list');
    } catch (error) {
        res.status(404).send("unable to save credit sales to db");
        console.log("Error saving credit sales", error);
    }

})
router.get('/Credit-list', async (req, res) => {
    try {
        const creditItems = await Credit.find().sort({ $natural: -1 }); //this is for sorting the new credit sale up
        res.render('creditlist', {
            title: "Credit List",
            credits: creditItems,

        });

    } catch (error) {
        res.status(404).send("Unable to find items in the db");
        console.log("Error fetching credit sales", error);

    }
});

// get credit sales update form
router.get("/updateCredit/:id", async (req, res) => {
    try {
        const item = await Credit.findOne({ _id: req.params.id });
        res.render("updateCredit", {
            title: "Update Credit",
            credit: item,
        });
    } catch (err) {
        res.status(400).send("Unable to find item in the database");
    }
});

router.get("/updateCredit/:id", async (req, res) => {
    try {
        const item = await Credit.findOne({ _id: req.params.id })
        res.render("updatecredit", {
            credit: item,
            title: "Update Credit",
        })
    } catch(error) {
        res.status(400).send("Unable to find item in the database");
    }
    
    
});


// post updated credit sale
router.post("/updateCredit", async (req, res) => {
    try {
        await Credit.findOneAndUpdate({ _id: req.query.id }, req.body);
        res.redirect("/Credit-list");
    } catch (err) {
        res.status(404).send("Unable to update item in the database");
    }
});

// delete Credit Sale
router.post("/deleteCredit", async (req, res) => {
    try {
    await Credit.deleteOne({ _id: req.body.id });
    res.redirect("back");
    } catch (err) {
    res.status(400).send("Unable to delete item in the database");
    }
    });

module.exports = router;