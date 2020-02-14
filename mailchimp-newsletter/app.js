const express = require("express");
const request = require("request");

const app = express();

const port = 3000 || '';

app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html');
})

app.listen(port, () => {
    console.log("Servidor esta rodando em: http://localhost:"+port);
});