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
    comments: [{
        // commentId : { type: mongoose.Schema.Types.ObjectId, ref : 'comment'}
        type: mongoose.Schema.Types.ObjectId, 
        ref : 'comment'
    }],
    date: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("blog", BlogSchema);