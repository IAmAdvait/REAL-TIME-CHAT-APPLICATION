// Import WebSocket and HTTP modules
const WebSocket = require('ws');
const http = require('http');

// Create an HTTP server
const server = http.createServer();

// Create a WebSocket server on top of the HTTP server
const wss = new WebSocket.Server({ server });

// Array to store connected clients
let clients = [];

// Handle new client connections
wss.on('connection', (ws) => {
  clients.push(ws); // Add new client to list

  // When a message is received from a client
  ws.on('message', (msg) => {
    // Send the message to all connected clients
    clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(msg);
      }
    });
  });

  // Remove client when they disconnect
  ws.on('close', () => {
    clients = clients.filter((c) => c !== ws);
  });
});

// Start the server on port 8080
server.listen(8080, () => {
  console.log("WebSocket server listening on ws://localhost:8080");
});
