// here we are storing all the Schema(model) which we are use in our app
const mongoose = require("mongoose");

let chatSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    msg: {
        type: String,
        maxLength: 100
    },
    createdAt: {
        type: Date,
        required: true
    }

});
const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;