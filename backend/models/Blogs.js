const mongoose = require("mongoose");

const BlogSchema = new Schema({

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
    likes: {
        type: Number
    },
    dislikes: {
        type: Number
    },
    comment: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("blog", BlogSchema);