const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Testando</h1>");
});

const port = 3000 || '' ;

app.listen(port, function() {
    console.log("Server started on: https://localhost:" + port);
});