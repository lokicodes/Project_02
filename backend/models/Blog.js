const mongoose = require("mongoose");
const {Schema} = mongoose;

const BlogSchema = new Schema({

    user :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    } ,
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        default: "General"
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'user'
    }],
    comment: [{
        commenter : { type: mongoose.Schema.Types.ObjectId, ref : 'user'},
        commentbody : {type : String}}
    ],
    date: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("blog", BlogSchema);