const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Chomik#2019",
    database: "BMIdiet",
});


app.get("/", (req , res) => {

        const sqlInsert = "INSERT INTO `BMIdiet`.`new_table` (`movieName`, `movieReview`) VALUES ('test', 'udalosie');"
        db.query(sqlInsert, (err, result) => {
            res.send("hello sql")
        })
         res.send("Hello world");
         debugger
})

app.listen(3001, () => {
    console.log("run 3001")
});