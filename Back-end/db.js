const mysql = require('mysql')
const db = mysql.createConnection({
    host: "",
    user: "",
    password: "",
    database: "test"
})

module.exports = db;