const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = process.env.PORT;
app.use(bodyParser.json());
app.get("/", (req, res) => {
    //res.send({hello: "world"});
    console.log(req.body);
    res.sendStatus(200);
});



app.post("/", (req, res) => {
    //res.send({hello: "world"});
    console.log(req.body);
    res.sendStatus(200);
});

app.listen(PORT || 8080);

