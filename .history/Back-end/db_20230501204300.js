const mysql = require('mysql')
const db = mysql.createConnection({
    host: "localhost",
    user: "test",
    password: "test123",
    database: "test"
})
// input your own database

module.exports = db;