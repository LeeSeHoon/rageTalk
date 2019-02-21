const express = require("express");

const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
    //res.send({hello: "world"});
    console.log(req.body);
    res.sendStatus(200);
});

app.listen(PORT || 8080);

