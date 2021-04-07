const express = require('express');
const session = require('express-session');

var app = express();

app.listen(3000);

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.static('node_modules'));


app.get("/manager-dashboard", (req, res) => {

    res.render("manager-dashboard/index");
})