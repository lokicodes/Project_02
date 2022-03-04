const connectToMongo = require('./db');
const express = require('express');

connectToMongo();
const app = express()

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(5000, ()=>{
 console.log("server started at port 5000");
})