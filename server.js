require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

const bookRouter = require('./routes/bookRoutes')

//Mongoose / MongoDB
const connectToMongoDB = require("./db/connection");
connectToMongoDB();

//Middleware
app.use(express.json());
app.use(express.urlencoded());

//Routes
app.get("/", (req, res) => {
  //root
  res.send(`
        <h1>Landing</h1>
        </br>
        <a href="http://localhost:${port}/bookshelf"><button>Go to Bookshelf Directory</button></a>
        `);
});

app.use("/bookshelf", bookRouter);

//Listener
app.listen(port, () => {
  console.log(`Server is running: http://localhost:${port}`);
});
