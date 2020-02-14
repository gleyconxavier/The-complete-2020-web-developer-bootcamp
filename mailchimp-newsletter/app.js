const express = require("express");
const request = require("request");
require("dotenv/config");

const app = express();

const port = 3000 || '';

app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname+'/index.html');
});

app.post("/", (req, res) => {
    const fName = req.body.fName;
    const lName = req.body.lName;
    const email = req.body.email;

    const data = {
        members: [
            {
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: fName,
                LNAME: lName
            }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const options = {
        url: "https://us"+process.env.SV_NUMBER+".api.mailchimp.com/3.0/lists/" + process.env.AUDIENCE_ID,
        method: "POST",
        headers: {
            "Authorization": "gleyconxavier "+process.env.MAILCHIMP_KEY
        },
        body: jsonData
    };

    request(options, function(error, response, body) {
        if(error) {
            res.send("Houve um problema ao cadastrar, por favor tente novamente.");
        } else {
            if(response.statusCode === 200) {
                res.sendFile(__dirname+"/success.html");
            } else {
                res.sendFile(__dirname+"/failure.html");
            }
        }
    });
});

app.listen(port, () => {
    console.log("Servidor esta rodando em: http://localhost:"+port);
});