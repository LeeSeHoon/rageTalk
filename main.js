const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const server = require('http').createServer(app);

const io = require('socket.io')(server);

const port = 9000;

const PORT = process.env.PORT;
server.listen(PORT, function() {
    console.log(`uptalk Proxy server Listen`);
});

io.on('connection', function(socket) {
    console.log('uptalk Proxy server connection');
    console.log('client socket handshake', socket.handshake);
    console.log('client address:', socket.handshake.address);
    
});





app.use(bodyParser.json());
app.get("/", (req, res) => {
    //res.send({hello: "world"});
    console.log(req.body);
    res.sendStatus(200);

    io.emit('nv_event' , req.body);
});



app.post("/NV/WC1SWN", (req, res) => {
    //res.send({hello: "world"});
    console.log(req.body);
    res.sendStatus(200);
    console.log(req.body);
    io.emit('nv_event' , req);
});

//app.listen(PORT || 8080);

