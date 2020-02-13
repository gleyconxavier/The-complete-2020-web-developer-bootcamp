// use esversion: 6
const express = require("express");
const app = express();

app.use(express.urlencoded());

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/home.html");
});

app.post("/", (req, res) => {
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);

    const soma = num1 + num2;
    const mult = num1 * num2;
    const div = num1 / num2;
    const sub = num1 - num2;


    res.send("Resultado do calculo: <br>" +
    "Soma: "+soma+"<br/>"+
    "Multiplicação: "+mult+"<br/>"+
    "Divisão: "+div+"<br/>"+
    "Subtração: "+sub+"<br/>"
    );
});

const port = 3000 || '' ;

app.listen(port, function() {
    console.log("Server started on: https://localhost:" + port);
});