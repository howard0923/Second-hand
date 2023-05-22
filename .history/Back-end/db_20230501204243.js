const mysql = require('mysql')
const db = mysql.createConnection({
    host: "localhost",
    user: "",
    password: "",
    database: ""
})
// input your own database

module.exports = db;