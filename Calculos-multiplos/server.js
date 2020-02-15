// jshint esversion:6
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

    


    res.send(
    '<div style="margin: 25% auto;width:50%;border: 10px dashed #44158F;padding:10px;">'+
    "Resultado do calculo: <br>" +
    "Soma: "+soma+"<br/>"+
    "Multiplicação: "+mult+"<br/>"+
    "Divisão: "+div+"<br/>"+
    "Subtração: "+sub+"<br/>"+
    "<a href='/'><button>Voltar</button</a>"
    +"</div>"
    );
});

const port = 3000 || '' ;

app.listen(port, function() {
    console.log("Server started on: http://localhost:" + port);
});