const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const server = require('http').createServer(app);

const io = require('socket.io')(server);

const port = 9000;

server.listen(port, function() {
    console.log(`uptalk Proxy server Listen`);
});

io.on('connection', function(socket) {
    console.log('uptalk Proxy server connection');
    console.log('client socket handshake', socket.handshake);
    console.log('client address:', socket.handshake.address);
    
});





const PORT = process.env.PORT;
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

    io.emit('nv_event' , req.body);
});

app.listen(PORT || 8080);

