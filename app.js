const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views" , path.join(__dirname,"/views")); // defining path of views folder dirname shows index.js file is where

app.get("/", (req, res) => {
    res.render("home.ejs");
})

app.get("/about", (req, res) => {
    res.render("about.ejs");
})

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
})


app.get("/form", (req, res) => {
    res.render("form.ejs");
})


module.exports = app;
