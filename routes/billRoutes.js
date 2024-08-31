// const express = require("express");
// const router = express.Router();

// // generate receipt
// router.get('/bill', (req, res) => {
//     res.render('receipt', { title: "Receipt" });
// })

// router.get("/bill/:id", async (req, res) => {
//     try {
//         const sale = await Sale.findOne({ _id: req.params.id })
//             .populate("produceName", "produceName")
//             .populate("saleAgent", "name");
//         console.log("my sale", sale)
//         // const formattedDate = formatDate(sale.saledate);
//         res.render("receipt", {
//             sale,
//             // formattedDate,
//             title: "Receipt"
//         });
//     } catch (error) {
//         res.status(400).send("The item isn't in the database")
//     }

// })


// module.exports = router;