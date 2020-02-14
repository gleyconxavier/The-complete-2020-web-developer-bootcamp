// jshint esversion:6

const express = require("express");
const app = express();

let items = ["Comprar comida", "Comprar software", "Comprar hardware"];

app.use(express.urlencoded({extended:true}));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    let today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("pt-BR", options);

    res.render("list", {kindOfDay: day, newListItems: items});
});

app.post("/", (req, res) => {
    item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});

const port = 3000 || '';

app.listen(port,(req, res) => {
    console.log("Servidor iniciou em: http://localhost:"+port);
});