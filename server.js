const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const moment = require('moment');

//added

const passport = require("passport");
const expressSession = require("express-session")({
secret: "secret",
resave: false,//donot save their session after login
saveUninitialized: false//the session didnot start donot save
});

require("dotenv").config();

//import models
const Signup  = require('./models/signup');
const Produce  = require('./models/produce');
const Sale = require('./models/sale');
const Credit = require('./models/credit');


//import routes
const signupRoutes = require('./routes/signupRoutes')
const loginRoutes = require('./routes/loginRoutes');
const userRoutes = require('./routes/userRoutes');
const stockRoutes = require('./routes/stockRoutes');
const thesaleRoutes = require('./routes/thesaleRoutes');
const logoutRoutes = require('./routes/logoutRoutes');
const creditsaleRoutes = require('./routes/creditsaleRoutes');
const managerRoutes = require('./routes/managerRoutes');
const sales_dashboardRoutes = require('./routes/sales_dashboardRoutes');
const billRoutes = require('./routes/billRoutes');
const cerealRoutes = require('./routes/cerealRoutes');
const homeRoutes = require('./routes/homeRoutes');



//instantiations
const app = express();
const port = 5000;

//configuration
app.locals.moment = moment
app.set("view engine", "pug");// specify the view engine
app.set("views", path.join(__dirname, "views"));//specify the views directory

// set db connection to mongoose
mongoose.connect(process.env.DATABASE_LOCAL, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", err => {
    console.error(`Connection error: ${err.message}`);
  });

//middleware
app.use(express.static(path.join(__dirname, "public")));//specify a folder for static files
app.use(express.urlencoded({ extended: true })); // helps to parse data from forms
app.use(express.json());// helps to capture data in json format

//added
// express session configs
app.use(expressSession);// express session
app.use(passport.initialize());//intialize passport
app.use(passport.session());//use passport session


// passport configs
passport.use(Signup.createStrategy()); // use the local strategy
passport.serializeUser(Signup.serializeUser()); // assign a serial number to a user in the system
passport.deserializeUser(Signup.deserializeUser()); // the serial number is destroyed on log out

// use imported routes
app.use("/", loginRoutes);
app.use("/", signupRoutes);
app.use("/", userRoutes);
app.use("/", stockRoutes);
app.use("/", thesaleRoutes);
app.use("/", logoutRoutes);
app.use("/", creditsaleRoutes);
app.use("/", managerRoutes);
app.use("/", sales_dashboardRoutes);
app.use("/", billRoutes);
app.use("/", cerealRoutes);
app.use("/", homeRoutes);

app.get("*", (req, res) => {
  res.send("Error! This page does not exist");
});

// Logout, call back checking if there is a session
app.post('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        // failed to destroy session
      } else {
        return res.redirect('/login');
      }
    });
  }
});

//bootstraping a server
app.listen(port, () => console.log(`listening on port ${port}`)); // string interporation