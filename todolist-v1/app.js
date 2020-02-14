// jshint esversion:6

const express = require("express");
const app = express();

app.use(express.urlencoded({extended:true}));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    let today = new Date();
    today = today.getDay();
    let day = "";
    if(today === 6 || today === 0) {
        day = "Weekend";
    } else {
        day = "Weekday";
    }

    switch (today) {
        case 0: 
            day = "Domingo";
            break;
        case 1:
            day = "Segunda";
            break;
        case 2:
            day = "Terça-feira";
            break;
        case 3:
            day = "Quarta-feira";
            break;
        case 4:
            day = "Quinta-feira";
            break;
        case 5:
            day = "Sexta-feira";
            break;
        case 6:
            day = "Sábado";
            break;
        default:
        console.log("Error: current day is equal to: "+today);
    }

    res.render("list", { kindOfDay: day });
});

const port = 3000 || '';

app.listen(port,(req, res) => {
    console.log("Servidor iniciou em: http://localhost:"+port);
});