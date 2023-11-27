const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectDBPostSchema = new Schema ({
    title: String,
    summary: String,
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    image: String,
    body: String,
    url: String,
    datePosted: {
        type: Date,
        default: new Date()
    }
})

const ProjectDBPost = mongoose.model('ProjectDBPost', ProjectDBPostSchema);
module.exports = ProjectDBPost;