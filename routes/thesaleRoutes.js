const express = require('express');
const router = express.Router();
// const connectEnsureLogin = require('connect-ensure-login');

// import model
const Sale = require('../models/sale');
const Produce = require('../models/produce');


router.get('/thesale', (req, res) => {
    res.render('sale', { title: "Sale" });
})



router.post('/thesale', async (req, res) => {
    try{
        const newSale = new Sale(req.body);
        await newSale.save();
        res.redirect('saleslist');
        // res.render('receipt')
    } catch (error) {
        res.status(404).send("Unable to save sale to db");
        console.log("Error saving sale", error);
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


//generate receipt
router.get('/receipt', (req, res) => {
    res.render('receipt', { title: "Receipt" });
})


router.get('/receipt/:id', async (req, res) => {
    try {
        // Fetch the sale from the database by ID
        const sale = await Sale.findById(req.params.id)
            .populate('items')
            .populate('salesAgent', 'name')
            .exec();

        // If sale not found, return a 404 error
        if (!sale) {
            return res.status(404).send('Sale not found');
        }

        // Render the receipt view with the sale data
        res.render('receipt', { 
            sale,  // Pass the sale data to the view
            title: 'Sale Receipt' // Optional title for the view
        });
    } catch (error) {
        console.error('Error fetching sale:', error);
        res.status(400).send('Server error');
    }
});

    
module.exports = router;