const express = require('express');
const app= express();
const http= require('http').Server(app);
const io = require('socket.io')(http);
const path= require('path');

const staticpath= __dirname;
app.use(express.static(staticpath));


const PORT = 2020 || process.env.PORT;
const hostname='127.0.0.1';

app.get('/',(req,res)=>{
    console.log('HERE');
    res.sendFile(path.join(__dirname,'./index.html'));
    
});

/*io.on('connection', (socket) => { ... }):
 This code block listens for incoming connections from clients. When a new client connects to the server, the provided callback function is executed. The socket object represents the connection between the server and the client. */

    io.on('connection',(socket)=>{
        console.log("User Connected");
        socket.on('disconnect',()=>{
            console.log("User Disconected")
        });
    });

http.listen(PORT,hostname,()=>{
    console.log(`here it is http://${hostname}:${PORT}`);
})
