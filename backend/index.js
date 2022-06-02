const dotenv = require("dotenv") ;
const connectToMongo = require('./db');
const express = require('express');
var cors = require("cors");
connectToMongo();
const app = express() ;

dotenv.config({path: './.env'}) ;

const port = process.env.PORT ;

app.use(cors());
app.use(express.json());

// Available Routes
app.use("/api/auth" , require("./routes/auth")) ;
app.use("/api/blogs" , require("./routes/blogs")) ;

app.get('/', (req, res) => {
  res.send('hello world');
})

app.listen(port, ()=>{
  console.log(`server started at port ${port}`);
})