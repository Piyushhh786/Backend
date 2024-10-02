const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
main().then(() => {
    console.log("connection with mongoose(webChat) successfully\n");
}).catch((err) => {
    console.log(err);
});
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/webChat');
}

let chat1 = new Chat({
    from: "Neha",
    to: "Priya",
    msg: "Hello can you please send me today's lecture notes",
    createdAt: new Date()
});
chat1.save().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
let allChats = [
    {
        from: "Honey",
        to: "xyz",
        msg: "price:50k",
        createdAt: new Date()
    },
    {
        from: "Honey",
        to: "Cream",
        msg: "jeans price:50k",
        createdAt: new Date()
    },
    {
        from: "Piyush",
        to: "Aniket",
        msg: "Shirt price:50k",
        createdAt: new Date()
    },
    {
        from: "Aniket",
        to: "Piyush",
        msg: "i will give you blowjob..",
        createdAt: new Date()
    }
];
Chat.insertMany(allChats);
