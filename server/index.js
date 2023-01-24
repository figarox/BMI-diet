const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const bcrypt = require('bcrypt');
const saltRounds = 10

const app = express();

app.use(express.json());
app.use(cors());

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
                    res.send(result)
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