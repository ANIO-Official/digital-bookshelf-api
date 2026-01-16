require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

//Mongoose / MongoDB
const connectToMongoDB = require('./db/connection')
connectToMongoDB()

//Middleware
app.use(express.json());
app.use(express.urlencoded());

//Routes
app.get('/', (req, res) => { //root
    res.send('<h1>Landing</h1>')
})



//Listener
app.listen(port, () =>{
    console.log(`Server is running: http://localhost:${port}`)
})