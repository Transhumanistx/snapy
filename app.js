// Third party libraries require
const express = require('express');
const session = require('express-session');
const formidableMiddleware = require('express-formidable');

// Requireing routes 
const shiftManagerRoutes = require("./routes/shiftManagerRoutes");
var app = express();

app.listen(3000);

app.set('view engine', 'ejs');

// Registering the middlewares
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(session({
    secret: 'This is my session secret key. How Creative am I',
    resave: false,
    saveUninitialized: true
}));
app.use(formidableMiddleware());

// Registering the routes
app.use(shiftManagerRoutes);

app.get("/", (req, res) => {

    req.session.role = "manager";
    req.session.shift_manager_id = 1;
    
    //req.session.role = "staff"
    //req.session.staff_id = 1;
    res.render("index.ejs");
})
