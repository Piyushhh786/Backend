const express = require('express');
const app = express();
const port = 8080;
app.listen(port, () => {
    console.log(`server is on port ${port}`);
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/register', (req, res) => {
    console.log(req.body);
    let { Username, password } = req.query;
    res.send(`Hello, it is a get request @ ${Username}`);
});
app.post('/register', (req, res) => {
    let data = req.body;
    console.log(req.body);
    res.send(`Hello, it is a post request , welcome @${data.name}`);
});

