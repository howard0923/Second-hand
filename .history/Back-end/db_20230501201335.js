const mysql = require('mysql')
const db = mysql.createConnection({
    host: "",
    user: "",
    password: "",
    database: ""
})
// input your own database

module.exports = db;