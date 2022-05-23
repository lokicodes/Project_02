const mongoose = require("mongoose") ;
const {Schema} = mongoose ;

const CommentSchema = new Schema ({

    comment : {
        type : String 
    } ,
    commenter : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    } 
},{timestamps : true})

module.exports = mongoose.model("comment", CommentSchema);