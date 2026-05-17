import jwt from "jsonwebtoken"
import { Message } from "../models/message.model.js"
import { User } from "../models/user.model.js"

//get current stats from DB + online count
const getStats = async (io) => {
  const totalMessages = await Message.countDocuments() //count all documents in messages collection

  const totalUsers    = await User.countDocuments() //count all the registered users

  //gets all the socket objects currently in the "global room"
  // each socket = one connected browser tab
  // .length = no of currently online users
  const onlineSockets = await io.in("global").fetchSockets()

  return { totalMessages, totalUsers, onlineUsers: onlineSockets.length }
}

//Main export — called once from server.js
export const initSocket = (io) => {

  //runs before 'connection', verifies JWT
  io.use((socket, next) => {
    const token = socket.handshake.auth?.token
    if (!token) return next(new Error("No token"))
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      socket.user = decoded   // attach { userId, ... } to socket
      next()
    } catch {
      next(new Error("Invalid token"))
    }
  })

  //fires every time a new client successfully connects
  io.on("connection", async (socket) => {
    const userId = socket.user.userId

    // Fetch user name from DB (token only has userId)
    const user = await User.findById(userId).select("name")
    if (!user) return socket.disconnect()

    console.log(`${user.name} connected [${socket.id}]`)

    // Join the global room 
    socket.join("global")

    //Send chat history to THIS user only
    const history = await Message
      .find()
      .sort({ createdAt: 1 })     // oldest first
      .limit(50)//fetch last 50 messages from MongoDB
      .lean() //return plain JS objects instead of Mongoose documents.
    
      //sends only to this specific client
      //we use socket because only this new user needs history.
      socket.emit("chat_history", history)

    // Send current stats to THIS user only
    socket.emit("stats_update", await getStats(io))

    //Tell everyone else a new user joined
    //socket.io("global") = everyone in the "global" room except this socket
    // the joining user doesnt need a notification that they joined, so used socket.to
    socket.to("global").emit("user_join", {
      userId,
      name: user.name,
      timestamp: new Date()
    })

    // Broadcast updated online count to ALL
    //io.to("global") = everyone including the sender
    io.to("global").emit("stats_update", await getStats(io))


    // Client sends a message
    socket.on("send_message", async (data) => {
      const { text } = data

      // Basic validation
      if (!text || text.trim() === "") return

      // Save to MongoDB
      const saved = await Message.create({
        sender:     userId,
        senderName: user.name,
        text:       text.trim()
      })

      // Broadcast to EVERYONE in room (including sender)
      io.to("global").emit("new_message", saved)

      // Update stats for everyone (message count changed)
      io.to("global").emit("stats_update", await getStats(io))
    })


    // Client disconnects 
    socket.on("disconnect", async () => {
      console.log(`${user.name} disconnected`)

      // Tell everyone else this user left
      socket.to("global").emit("user_leave", {
        userId,
        name: user.name
      })

      // Update online count for everyone
      // Small timeout: socket leaves room after disconnect event
      setTimeout(async () => {
        io.to("global").emit("stats_update", await getStats(io))
      }, 100)
    })
  })
}