// jshint esversion:6

const express = require("express");
const app = express();
const date = require(__dirname+"/date.js");

const items = ["Comprar comida", "Comprar software", "Comprar hardware"];
const workItems = [];

app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {

    const day = date.getDate();

    res.render("list", {listTitle: day, newListItems: items});
});

app.post("/", (req, res) => {
    item = req.body.newItem;

    if(req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }

});

app.get("/work", (req, res) => {
    res.render("list", {listTitle: "Lista de trabalho", newListItems: workItems});
});

app.post("/work", (req, res) => {
    const item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});

app.get("/about", (req, res) => {
    res.render("about");
});

const port = 3000 || '';

app.listen(port,(req, res) => {
    console.log("Servidor iniciou em: http://localhost:"+port);
});