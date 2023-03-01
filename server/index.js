const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const session = require("express-session")
const bcrypt = require('bcrypt');
const saltRounds = 10

const app = express();

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }


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
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {
            httpOnly: true,
        }
    })
)

app.use((req, res, next) => {
    console.log(req.session);
    next();
})

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Chomik#2019",
    database: "BMIdiet",
});


            app.post('/register',(req,res) => {
            const login = req.body.login;
            const password = req.body.password;

            const sex = req.body.sex;
            const weight = req.body.weight;
            const height = req.body.height;

            const h2 = height/100;
            const bmicalculate = weight/(h2*h2)


            bcrypt.hash(password,saltRounds, (err,hash) => {
                if(err) {
                    console.log(err)
                }
                db.query(
                    "INSERT INTO konto (`login`, `password`) VALUES (?,?);",
                    [login,hash],
                    (err,result)=>{
                        console.log(login)
                    }
                );
                db.query(
                    "CREATE TABLE `?` (`id` INT NOT NULL AUTO_INCREMENT,`achievements` VARCHAR(45) NOT NULL,`weight` VARCHAR(45) NOT NULL,`bmi` VARCHAR(45) NOT NULL,`goal` VARCHAR(45) NOT NULL,PRIMARY KEY (`id`));",
                    [login],
                    console.log(login)

                );
                db.query(
                    "INSERT INTO `?` (`achievements`, `weight`, `bmi`, `goal`) VALUES ('0', ?, ?, '0');",
                    [login,weight,bmicalculate],
                    (err,result)=>{
                        console.log(err)
                    }
                )

            })
            })

            app.get("/login", (req, res) => {
                if (req.session.user) {
                    res.send({ login: req.session.user});
                }else{
                    //res.send({ loggedIn: false })
                }
            })

            app.post('/login',(req,res) => {
                const login = req.body.login;
                const password = req.body.password;
            
                db.query(
                    "SELECT * FROM BMIdiet.?",
                    login,
                (err, result) => {
                    if (err){
                        res.send({ err: err})
                    }
                    if(result.length > 0){
                        bcrypt.compare(password, result[0].password, (error, response) =>{
                            if(response){

                                req.session.user = result;
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

app.get('/data', (req,res) => {
   db.query("SELECT * FROM BMIdiet.accout_statistics WHERE id = 12;",(err , result) => {
        if( err ){
            console.log(err)
        }else{
            res.send(result)
        }
   })
    }
)




app.listen(3001, () => {
    console.log("run 3001")
});