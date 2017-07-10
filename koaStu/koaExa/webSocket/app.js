const WebSocket = require('ws');
const WebSocketServer = WebSocket.Server;
const wss = new WebSocketServer({port: 3000});

wss.on('connection', function (ws) {
    console.log(`[SERVER] connection()`);
    ws.on('message', function (message) {
        console.log(`[SERVER] Received:${message}`);
        setTimeout(() => {
            ws.send(`What's your name?`, (err) => {
                if (err) {
                    console.log(`[SERVER] error:${err}`);
                }
            });
        }, 1000);
    });
});

console.log('ws server started at port 3000...');

let count=0;
let ws=new WebSocket('http://localhost:3000/any/path');//('ws://localhost:3000/any/path');

ws.on('open',function(){
    console.log(`[SERVER] open()`);
    ws.send('Hello!');
});

ws.on('message',function(message){
    console.log(`[CLIENT] Received:${message}`);
    count++;
    if(count>3){
        ws.send('GoodBye!');
        ws.close();
    }else{
        setTimeout(()=>{
            ws.send(`Hello,Iam Mr No.${count}`);
        });
    }
});