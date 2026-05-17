import express from "express"
import {createServer} from "http"
import { Server } from "socket.io" //Server class from Socket.IO
import dotenv from "dotenv"
import userRouter from "./routes/user.routes.js"
import { connectToDatabase } from "./config/db.js"
import cors from "cors"
import {initSocket} from "./socket/chat.socket.js"

dotenv.config()

//connect to the mongoDB
connectToDatabase()

const app = express()
//create an HTTP server that uses Express to handle requests
const httpServer  = createServer(app) 

app.use(cors())
app.use(express.json())
app.use('/',userRouter)

//we pass our HTTP server to Server class so that it can intercept websocket upgrades.
const io = new Server(httpServer, {
    cors:{
        origin:process.env.CLIENT_URL,//http://localhost:5173
        methods:["GET","POST"],
        credentials:true
    }
})

//we call initSocket function , passing the io instance
initSocket(io)

//httpServer.listen - NOT app.listen
httpServer.listen(process.env.PORT, ()=>{
    console.log(`Server on port ${process.env.PORT}`)
})

//app.listen() internally creates an HTTP server but doesn't give you a refrence to it. SOCKET.IO needs that reference to intercept the websocket upgrade request. so you create the server manually with createServer(app) and pass it to both SOCKET.IO and .listen()

// app.listen(process.env.PORT, ()=>{
//     console.log(`Server is listening on the port ${process.env.PORT}`)
// })
