import express from 'express'
const app = express()
import mongoose, { connect } from 'mongoose';
import bookRoute from './route/book_route.js';
import userRoute from './route/user_route.js'
import dotenv from 'dotenv'
dotenv.config();
import cors from 'cors'
app.use(cors());
app.use(express.json())


const PORT= process.env.PORT||8080
const URI=process.env.MongoDBURI;


mongoose.connect(process.env.MongoDBURI)
.then(() => console.log('MongoDB Atlas connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.use('/book',bookRoute)
app.use('/user',userRoute)

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`)
})