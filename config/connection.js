var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	user: "root",

	password: "08061963nh",
	database: "burgers_db"
});

connection.connect(function(err) {
	if (err) throw err;
});

module.exports = connection;