const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const session = require("express-session")


const bcrypt = require('bcrypt');
const saltRounds = 10

const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET","POST"],
    credentials: true
}));

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    session({
        key: "userId",
        secret: "learning",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60 * 60 * 24,
        },
    })
)


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Chomik#2019",
    database: "BMIdiet",
});


            app.post('/register',(req,res) => {
            const login = req.body.login;
            const password = req.body.password;


            bcrypt.hash(password,saltRounds, (err,hash) => {
                if(err) {
                    console.log(err)
                }
                db.query(
                    "INSERT INTO `BMIdiet`.`konto` (`login`, `password`) VALUES (?,?);",
                    [login,hash],
                    (err,result)=>{
                        console.log(err)
                    }
                )

            })
            })

            app.get("/login", (req, res) => {
                if (req.session.login) {
                    res.send({ loggedIn: true, login: req.session.login});
                }else{
                    res.send({ loggedIn: false })
                }
            })

            app.post('/login',(req,res) => {
                const login = req.body.login;
                const password = req.body.password;
            
                db.query(
                    "SELECT * FROM BMIdiet.konto WHERE login = ?",
                    login,
                (err, result) => {
                    if (err){
                        res.send({ err: err})
                    }
                    if(result.length > 0){
                        bcrypt.compare(password, result[0].password, (error, response) =>{
                            if(response){
                                req.session.login = result;
                                res.send(result);
                            }else{
                                res.send({ message: "Wrong login/password combination !!!"})   
                            }
                        })
                        }
                    else{
                        res.send({ message: "User dosen't exist"})   
                    }
                    
                    }
                )

            })


app.listen(3001, () => {
    console.log("run 3001")
});