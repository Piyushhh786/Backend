const { urlencoded } = require('body-parser');
const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const methodOverride = require('method-override');

//data
const { v4: uuidv4 } = require('uuid');//it will generate universal unique identifier
class Post {

    constructor(username, content, id) {
        this.id = id;
        this.username = username;
        this.content = content;
    }

};
let post1 = new Post('Kanishk', 'I love mishra ji', uuidv4());
let post2 = new Post('Piyush', 'Smart work and Hard work is the key of success', uuidv4());
let post3 = new Post('Chetan', 'Just chill baby', uuidv4());
let posts = [post1, post2, post3];
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));//it will serve the different files which is present in public
app.listen(port, () => {
    console.log(`server is listening on port : ${port}`);
});
app.get('/post', (req, res) => {
    res.render('index.ejs', { posts });
});
app.get('/', (req, res) => {
    res.send('Happy to see you @user');
});
app.get('/post/new', (req, res) => {
    res.render('new.ejs');
});
app.get('/post/:id', (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    if (post) {
        console.log(post);
        res.render('seeInDetail.ejs', { post });

    }
    else {
        res.send(`post is not available :(error 404)`);
    }
});
app.post('/post', (req, res) => {
    let { username, content } = req.body;
    console.log(req.body);
    posts.push(new Post(username, content, uuidv4()));
    // res.render('index.ejs', { posts });//!by the way it is not a good method to go that page instead this use redirect method for connecting pages
    res.redirect('/post');

});
app.get('/post/:id/edit', (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    console.log(id);
    if (post) res.render('edit.ejs', { post });
    else res.send('error');

});
app.patch('/post/:id', (req, res) => {//patch requesst is for update the route
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    let newContent = req.body.content;
    if (post) {
        post.content = newContent;
        console.log(`id found : ${id} : ${newContent}`);
        res.redirect('/post');
    }
    else res.send('post is unavailable:(patch./post/id');
});
app.delete('/post/:id/delete', (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect('/post');
});


