const mongoose = require("mongoose");
const express = require("express");
const methodOverride = require("method-override");
const chat = require("./models/chat.js");
const Chat = require("./models/chat.js");
const path = require("path");
const app = express();
const port = 8080;

app.set("views", path.join(__dirname, "views"));//ejs templates....
app.set("view engine", 'ejs');
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, "public")));//serving sstatic file to the ejs
app.use(express.urlencoded({ extended: true }));
//serverSetupWithMongoose
main().then(() => {
    console.log("connection with mongoose(webChat) successfully\n");
}).catch((err) => {
    console.log(err);
});
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/webChat');
}

app.listen(port, () => {
    console.log("our server is listening on 8080 port ");
});
app.get("/", (req, res) => {
    res.send("server is running properly...");
});
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    res.render("index.ejs", { chats });//views ke under jakr index.ejs file client ko serve karegi....
});
app.get("/chats/new", (req, res) => {
    // it will serve the form to our client
    //so the we can add the new users
    res.render("new.ejs");
});
app.post("/chats", (req, res) => {
    let { to, from, msg } = req.body;
    let newChat = new Chat({
        to: to,
        from: from,
        msg: msg,
        createdAt: new Date()
    });
    newChat.save().then((res) => {// if we are using then we dont need to use await or async function
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });
    res.redirect("/chats");

});
app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
})
app.put("/chats/:id/edit", async (req, res) => {
    let { newMsg } = req.body;
    let { id } = req.params;
    let updatedChat = await Chat.findByIdAndUpdate(
        id,
        { msg: newMsg },
        { runValidators: true, new: true }
    );
    console.log(updatedChat);
    res.redirect("/chats");
});
app.delete("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(
        id
    );
    if (!deletedChat) {
        return res.status(404).send('Chat not found');
    }
    console.log(deletedChat);
    res.redirect("/chats");

});


