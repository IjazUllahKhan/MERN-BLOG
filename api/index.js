import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js'

dotenv.config();
const app = express();
const port = 7000;

app.use(express.json())

mongoose.connect(process.env.MONGO_URL).then(()=>{console.log("MongoDB is connected")}).catch((err)=>{console.log(err);})

app.use("/api/user",userRoutes)
app.use('/api/auth',authRoutes)

app.listen(port,()=>{console.log(`Server is running on port ${port}!`);})

