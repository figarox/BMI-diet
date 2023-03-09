const express = require("express");
const mysql = require("mysql");
const bcrypt = require('bcrypt');
const saltRounds = 10
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const session = require("express-session");
const { response } = require("express");


//if (process.env.NODE_ENV !== 'production') {
// }


app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET","POST"],
    credentials: true
}));

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));


require('dotenv').config();

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
    next();
})


const dbmysql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Test123',
    database: 'BMIdiet',
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
    dbmysql.query(
        "INSERT INTO konto (`login`, `password`) VALUES (?,?);",
        [login,hash],
        (err,result)=>{
            console.log(err)
        }
    );
    dbmysql.query(
        "CREATE TABLE "+ login +" (`id` INT NOT NULL AUTO_INCREMENT,`achievements` VARCHAR(45) NOT NULL,`weight` VARCHAR(45) NOT NULL,`bmi` VARCHAR(45) NOT NULL,`goal` VARCHAR(45) NOT NULL,PRIMARY KEY (`id`));",
    );
    dbmysql.query(
        "INSERT INTO "+ login +" (`achievements`, `weight`, `bmi`, `goal`) VALUES ('0', ?, ?, '0');",
        [weight,bmicalculate],
        (err,result)=>{
            console.log(err)
        }
    )

})
})

app.get("/login", (req, res) => {
    if (req.session.user) {
        res.send({id: req.session.user});
    }else{
        //res.send({ loggedIn: false })
    }
})

app.post('/login',(req,res) => {
    const login = req.body.login;
    const password = req.body.password;

    dbmysql.query(
        "SELECT * FROM BMIdiet.konto WHERE login = ?",
        [login],
    (err, result) => {
        if (err){
            res.send({ err: err})
            console.log(err)
        }
        if(result.length > 0){
            bcrypt.compare(password, result[0].password, (error, response) =>{
                if(response){
                    req.session.user = result[0].id;
                    res.send(result);
                }else{
                    res.send({ message: "Wrong login/password combination !!!"})   
                }
            })
            }
        else{
            res.send({ message: "Nie znaleziono uzytkownika"})   
        }
        
        }
    )

})

app.post('/id', (req,res) => {
    const id = req.body.id ;    
    dbmysql.query(
        "SELECT login FROM BMIdiet.konto WHERE id = "+ id +"",
        (err,result) => {
            if (err){
                console.log("nie znaleziono id")
            }
            if(result.length > 0){
                const idlogin = result[0].login
                res.send(idlogin)
                console.log("wykonano rezulat " + idlogin)
            }
        }
    )
    }
)

app.post('/data', (req,res) => {

    const login = req.body.login

    dbmysql.query(
        "SELECT * FROM BMIdiet."+login+"",
        (err, result) => {
            if(err){
                res.send({ message: "blad w pobieraniu danych z db"})   
            }else{
                res.send(result)
                console.log("wykonano rezulat pobierania uzytkownika")

            }
        }
        )
})




app.listen(3001, () => {
    console.log("run 3001")
});