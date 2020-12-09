const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost:3306",
    user: "root",
    password: "4l0n3f4st3r",
    database: "blogposts"
});

module.exports = db