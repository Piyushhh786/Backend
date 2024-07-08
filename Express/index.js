const express = require('express');//it is function which return a value
const app = express();// we store that value in app it will helps us to making server side app
//app is the object
// console.dir(app);


let port = 3000; //? we can also use 8080(it is used for making custom server)
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})//!once it is started it will not stop automatically we have to stop them by using 'ctrl+c'
//! if it is started go in your Browser and hit 'localhost:{PORT}'
//! currently it is showing 'Cannot GET /' because it is not returning any response just listening the request

// app.use((req, res) => {
//     // console.dir(req);//lots of properties comes we will use it in future
//     console.log(`request recieved`);//whenever our server recieved an requesst it will show on our server terminal
//     res.send({
//         name: "apple",
//         color: "red"
//     });//express convert this obj into .json presentation
// });

app.get('/', (req, res) => {
    res.send('You contacted Home or root path ');
});
app.get('/apple', (req, res) => {
    res.send({
        name: "applr",
        color: "red"
    })
});

//* post request
app.post('/', (req, res) => {
    res.send('you send a post request to root');
});

//*path parameter
app.get('/:username/:id', (req, res) => {
    console.log(req.params);
    let { username, id } = req.params;
    res.send(`hello, i am @${username},${id}`);
});

//* query
app.get('/search', (req, res) => {
    // console.log(req.params);
    let { q } = req.query;
    res.send(`hello, your query :${q}`);
});

//* if you do not want to send 404 eror...
app.get('*', (req, res) => {
    res.send('this path does not exit Wildcard here!!1')
});