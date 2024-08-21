const express = require('express');
const router = express.Router();
//const connectEnsureLogin = require('connect-ensure-login');

// import model
const Produce = require('../models/produce');

router.get('/stock',  (req, res) => {
    res.render('produce', { title: "Produce" });
})

router.post('/stock', async (req, res) => {
    try {
        const newProduce = new Produce(req.body);
        await newProduce.save();
        res.redirect('/Pro-list');
    } catch (error) {
        res.status(404).send("unable to save produce to db");
        console.log("Error saving produce", error);
    }

})
router.get('/Pro-list', async (req, res) => {
    try {
        const produceItems = await Produce.find().sort({ $natural: -1 }); //this is for sorting the new produce up
        res.render('producelist', {
            title: "Produce List",
            produces: produceItems,

        });

    } catch (error) {
        res.status(404).send("Unable to find items in the db");
        console.log("Error fetching produce", error);

    }
});

// get produce update form
router.get("/updateProduce/:id", async (req, res) => {
    try {
        const item = await Produce.findOne({ _id: req.params.id });
        res.render("updateProduce", {
            title: "Update Produce",
            produce: item,
        });
    } catch (err) {
        res.status(400).send("Unable to find item in the database");
    }
});

router.get("/updateProduce/:id", async (req, res) => {
    try {
        const item = await Produce.findOne({ _id: req.params.id })
        res.render("updateproduce", {
            produce: item,
            title: "Update Produce",
        })
    } catch(error) {
        res.status(400).send("Unable to find item in the database");
    }
    
    
});


// post updated produce
router.post("/updateProduce", async (req, res) => {
    try {
        await Produce.findOneAndUpdate({ _id: req.query.id }, req.body);
        res.redirect("/Pro-list");
    } catch (err) {
        res.status(404).send("Unable to update item in the database");
    }
});

// delete Produce
router.post("/deleteProduce", async (req, res) => {
    try {
    await Produce.deleteOne({ _id: req.body.id });
    res.redirect("back");
    } catch (err) {
    res.status(400).send("Unable to delete item in the database");
    }
    });

module.exports = router;