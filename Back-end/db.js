const mysql = require('mysql')
const db = mysql.createConnection({
    host: "140.117.71.141",
    user: "team",
    password: "520",
    database: "test"
})

module.exports = db;