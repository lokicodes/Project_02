// mongo "mongodb+srv://cluster0.yctsz.mongodb.net/myFirstDatabase" --username loki_codes
const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://loki_codes:lokesh%40123@cluster0.yctsz.mongodb.net/TestDB?retryWrites=true&w=majority";
const connectToMongo = ()=>{
    // mongoose.connect(mongoURI, ()=>{
    //     console.log("ho gaya mongoose se connect!");
    // })
   mongoose.connect(
        mongoURI,
        (err) => {
         if(err) console.log(err) 
         else console.log("mongdb is connected");
        }
      );
}
module.exports = connectToMongo;