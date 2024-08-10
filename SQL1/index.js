const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const methodOverride = require('method-override');
const mysql = require('mysql2');
const { faker } = require('@faker-js/faker');
// function createRandomUser() {
//     return [
//         faker.string.uuid(),
//         faker.internet.userName(),
//         faker.internet.email(),
//         faker.internet.password()
//         // avatar: faker.image.avatar(),
//         // birthdate: faker.date.birthdate(),
//         // registeredAt: faker.date.past(),
//     ];
// }
app.listen(port, '0.0.0.0', () => {
    console.log(`server is running on port http://0.0.0.0: :${port}`);
});
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
//? connection with mysql
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'random_app',
    password: 'Piyush@1234'
});
// now your code will start
app.get('/', (req, res) => {
    let q = 'SELECT username,userId,email FROM user';
    let q2 = 'SELECT count(*) FROM user';
    try {
        connection.query(q, (err, users) => {
            if (err) throw err;
            // console.log(users);
            connection.query(q2, (err, result) => {
                count = result[0]['count(*)'];
                res.render(`main.ejs`, { users, count });
            });
        });
    } catch (err) {
        console.log(err);
        res.send(`Error in database: ${err} `);
    }
    // res.render('main.ejs');
});
app.get('/:id/edit', (req, res) => {
    let { id } = req.params;
    try {
        let q = `SELECT username,email,userId FROM user WHERE userId = '${id}' `;
        connection.query(q, (err, result) => {
            user = result[0];
            res.render('edit.ejs', { user });
        });

    } catch (err) {
        console.log(err);
        res.send(`Error in DB : ${err}`);
    }
    // res.render('edit.ejs');
});
app.patch('/:id/edit', (req, res) => {
    let { id } = req.params;
    let { formPass, username } = req.body;
    // console.log(formPass, username);
    // res.send('updated');
    try {

        //if(formPass == db.pass)
        let q = `SELECT password FROM user WHERE userId = '${id}'`;
        connection.query(q, (err, result) => {
            if (err) throw err;
            let dbPass = result[0]['password'];
            if (dbPass == formPass) {
                try {
                    let q = `UPDATE user SET username = '${username}' WHERE userId = '${id}'`;
                    connection.query(q, (err, result) => {
                        if (err) throw err;
                        res.redirect('/');
                    });
                } catch (err) {
                    res.send(`something went wrong in dataBse: ${err}`);
                }
            }
            else res.send('Password is incorrect,Please type correct password ');
        });
    } catch (err) {
        res.send(`Error in DB: ${err} : `);
    }

});
app.get('/add', (req, res) => {
    res.render('add.ejs');
});
app.post('/add', (req, res) => {
    let { username, email, password } = req.body;
    let userId = faker.string.uuid();
    try {
        let q = 'INSERT INTO user (username,email,userId,password) VALUES (?,?,?,?)';
        connection.query(q, [username, email, userId, password], (err, result) => {
            if (err) throw err;
            console.log(result);
            res.redirect('/');
        });

    } catch (err) {
        res.send(`error in db: ${err}`);
        console.log(err);
    }
});
app.get('/delete', (req, res) => {
    res.render('delete.ejs');
});
app.delete('/delete', (req, res) => {
    let { email, password } = req.body;
    try {
        let q = `DELETE FROM user WHERE email = '${email}' AND password = '${password}' `;
        connection.query(q, (err, result) => {
            if (err) throw err;
            res.redirect('/');
        });

    } catch (err) {
        console.log(err);
        res.send(`Error in our database: ${err}`);
    }
});
