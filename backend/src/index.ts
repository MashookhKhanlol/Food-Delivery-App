import express, {Request, Response} from 'express'
import 'dotenv/config'
import cors from 'cors'
import mongoose from 'mongoose'

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(()=>{
    console.log("Connected to db")
})

const app = express();
app.use(express.json())
app.use(cors())

app.get('/test' , (req : Request , res : Response)=>{
    res.json({message : "Hello ! "})
})

app.listen(8000,()=>{
    console.log("Server started at port 8000")
})


