const express = require('express');
const app = express();//express can also require ejs
const path = require('path');
const port = 3000;

// app.use(express.static(path.join(__dirname, 'public')));//! and if you are not in your cwd use path.join


app.set('view engine', 'ejs');// this func is used to set lot of things currently we set the ejs

app.set(express.static('public/css'));/// this is because it can directly go to public folders and take all the files 

app.set(express.static('public/js'));

app.set('views', path.join(__dirname, '/views')); // we are informing the express that views are in Nodejs/Embedded_Js_templates directory

app.get('/', (req, res) => {
    // res.render('home.ejs');//! res.render function will take one more argument that is object 
    let diceVal = Math.floor(Math.random() * 6 + 1);
    res.render('home.ejs', { num: diceVal });//passing data to ejs
    // res.send('This is root path');
});
app.get('/:username/loops', (req, res) => {
    let username = req.params.username;
    let followers = ['aman', 'jittu', 'Tanish'];
    res.render('loops.ejs', { name: username, follower: followers });
});
app.listen(port, () => {
    console.log(`server activated on port:${port}`);
});


const instaData = require('./data.json');
app.get('/ig/:username', (req, res) => {
    let username = req.params.username;
    let data = instaData[username];
    console.log(data);
    if (data) {
        res.render('IgTemplat.ejs', { data });

    }
    else {
        res.render('error.ejs');
    }
});


