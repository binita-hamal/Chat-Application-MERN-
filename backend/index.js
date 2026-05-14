import express from "express"
import dotenv from "dotenv"
import userRouter from "./routes/user.routes.js"
import { connectToDatabase } from "./config/db.js"

dotenv.config()

//connect to the mongoDB
connectToDatabase()

const app = express()
app.use(express.json())
app.use('/',userRouter)


app.listen(process.env.PORT, ()=>{
    console.log(`Server is listening on the port ${process.env.PORT}`)
})
