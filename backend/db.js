// mongo "mongodb+srv://cluster0.yctsz.mongodb.net/myFirstDatabase" --username loki_codes
const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://cluster0.yctsz.mongodb.net/myFirstDatabase";
const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("ho gaya connect!");
    })
}
module.exports = connectToMongo;