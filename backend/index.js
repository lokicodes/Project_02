const connectToMongo = require('./db');
const express = require('express');

connectToMongo();
const app = express() ;
const port = 5000 ;

// Available Routes
app.use("/api/auth" , require("./routes/auth")) ;
app.use("/api/blogs" , require("./routes/blogs")) ;

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(port, ()=>{
  console.log(`server started at port ${port}`);
})