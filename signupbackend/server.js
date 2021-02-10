
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
//to this point
const routesUrls = require('./routes/routes');
const cors = require('cors');
dotenv.config();

console.log("*** about to connect to database  ***");
mongoose.connect(process.env.DATABASE_ACCESS,   
    {useNewUrlParser: true},
    () =>  console.log("***  DATABASE CONNECTED  ***"));


app.use(express.json());
app.use(cors());
app.use('/app', routesUrls);
app.listen(4000, ()=> console.log("*** SERVER IS UP AND RUNNING ***"));