const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const bcrypt = require('bcrypt')
const saltRounds = 10
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
require('dotenv').config();
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
}));

app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))

app.use(session({
    key: "userID",
    secret: process.env.DB_SECRET_SESSION,
    resave: false,
    saveUninitialized: false,
    cookie:{
        expires: 60 * 60 *  24 // 24 hours
    }
}))

// db connection
const db = mysql.createConnection({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_DATABASE_PASSWORD,
    database: process.env.DB_DATABASE
})

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ' + err.stack);
        return;
    }
    console.log('Connected to database with ID ' + db.threadId);
});

// REGISTER
app.post('/register', (req, res) => {
    const { username, password, firstName, lastName } = req.body;

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.error(err);
            return res.status(500).send({ err: err });
        }
        db.query(
            "INSERT INTO users (firstName, lastName, username, password) VALUES (?,?,?,?)",
            [firstName, lastName, username, hash],
            (err, result) => {
                if (err) {
                    console.error(err);
                    return res.status(500).send({ err: err });
                }
                res.status(201).send({ message: 'User registered successfully' });
            }
        );
    });
});

app.get('/loggedin', (req, res)=>{
    if(req.session.user){
        res.send({loggedIn: true, user: req.session.user})
    } else{
        res.send({loggedIn: false})
    }
})

// LOGIN
app.post("/loggedin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE username = ?",
        username,
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response)=>{
                    if(response){
                        req.session.user = result
                        res.send(result)
                    } else {
                        res.send({ message: "Wrong username/password combination" });
                    }
                })
            } else {
                res.send({ message: "User doesn't exist" });
            }
        }
    );
});



app.listen(3001, () => {
    console.log("running server")
})