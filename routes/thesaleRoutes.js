const express = require('express');
const router = express.Router();
const connectEnsureLogin = require('connect-ensure-login');

// import model
const Sale = require('../models/sale');

router.get('/thesale', (req, res) => {
    res.render('sale', { title: "Sale" });
})

router.post('/thesale', async (req, res) => {
    try {
        const newSale = new Sale(req.body);
        await newSale.save();
        res.redirect('/saleslist');
    } catch (error) {
        res.status(404).send("unable to save sales to db");
        console.log("Error saving sales", error);
    }

})
router.get('/saleslist', async (req, res) => {
    try {
        const Items = await Sale.find().sort({ $natural: -1 }); //this is for sorting the new 
        res.render('saleslist', {
            title: "Sales List",
            sales: Items,

        });

    } catch (error) {
        res.status(404).send("Unable to find items in the db");
        console.log("Error fetching sale", error);

    }
});

// get sales update form
router.get("/updatesale/:id", async (req, res) => {
    try {
        const item = await Sale.findOne({ _id: req.params.id });
        res.render("updatesale", {
            title: "Update Sale",
            sale: item,
        });
    } catch (err) {
        res.status(400).send("Unable to find item in the database");
    }
});

router.get("/updatesale/:id", async (req, res) => {
    try {
        const item = await Sale.findOne({ _id: req.params.id })
        res.render("updatesale", {
            sale: item,
            title: "Update Sale",
        })
    } catch (error) {
        res.status(400).send("Unable to find item in the database");
    }

});


// post updated sales
router.post("/updatesale", async (req, res) => {
    try {
        await Sale.findOneAndUpdate({ _id: req.query.id }, req.body);
        res.redirect("/saleslist");
    } catch (err) {
        res.status(404).send("Unable to update item in the database");
    }
});

// delete Sale
router.post("/deleteSale", async (req, res) => {
    try {
        await Sale.deleteOne({ _id: req.body.id });
        res.redirect("back");
    } catch (err) {
        res.status(400).send("Unable to delete item in the database");
    }
});


// generate receipt
router.get('/receipt', (req, res) => {
    res.render('receipt', { title: "Receipt" });
})

router.get("/receipt/:id", async (req, res) => {
    try {
        const sale = await Sale.findOne({ _id: req.params.id })
            .populate("produceName", "produceName")
            .populate("saleAgent", "name");
        console.log("my sale", sale)
        // const formattedDate = formatDate(sale.saledate);
        res.render("receipt", {
            sale,
            // formattedDate,
            title: "Receipt"
        });
    } catch (error) {
        res.status(400).send("The item isn't in the database")
    }

})



module.exports = router;