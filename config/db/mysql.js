const mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "aerials",
  password: "pidipo002",
  database: "crud_node_js_1"
});

con.connect(function(err) {
  if (err) throw err;
  console.log(' Connected to MySQL');
});

module.exports = con;