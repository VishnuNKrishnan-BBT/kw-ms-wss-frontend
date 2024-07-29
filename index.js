import { WebSocketServer } from 'ws'
import { sendLiveLocationMessages } from './functions/sendLiveLocationMessages'

const server = new WebSocketServer({ port: 8080 })

server.on('connection', (socket) => {
    console.log('A new client connected')

    socket.on('message', (message) => {
        console.log(`Received: ${message}`)
        // Echo the received message back to the client
        socket.send(`Server: You said "${message}"`)

        //Send live location data
        sendLiveLocationMessages(socket)
    })

    socket.on('close', () => {
        console.log('A client disconnected')
    })
})

console.log('WebSocket server is listening on ws://localhost:8080')
