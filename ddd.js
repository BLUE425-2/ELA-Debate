// Simple WebSocket server in Node.js
const WebSocket = require('ws');

// Use port 3000 (Codespaces will forward it)
const port = process.env.PORT || 3000;
const wss = new WebSocket.Server({ port });

wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.send('Hello from Codespace WebSocket server!');

    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
        ws.send(`Echo: ${message}`);
    });

    ws.on('close', () => console.log('Client disconnected'));
});

console.log(`WebSocket server running on ws://localhost:${port}`);
