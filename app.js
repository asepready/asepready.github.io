//import express
import express from "express";
//import mongoose
import mongoose from "mongoose";
// import routes
import catalogRoute from "./routes/catalog.js";

//import cors
import cors from "cors";
// construct express function
const app = express();

// connect ke database mongoDB
const mongoDB = 'mongodb://127.0.0.1:27017/gitsava';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', (error)=> console.error(error));
db.once('open', () => console.log('Database Connected'));

// middleware 
app.use(cors());
app.use(express.json());
app.use('/catalog', catalogRoute);

// listening to port
app.listen('3000',()=> console.log('Server Running at port: 3000'));