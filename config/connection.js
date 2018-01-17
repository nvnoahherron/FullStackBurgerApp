var mysql = require("mysql");

 var connection; 
 if (process.env.JAWSDB_URL) {
	 connection = mysql.createConnection(process.env.JAWSDB_URL);
 } else {
	 connection = mysql.createConnection({
		 host: "ehc1u4pmphj917qf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
		 port: 3306,

		 user: "iybdn8v7vivls1fa",

		 password: "d705bymnna6wh785",
		 database: "dakryvd9shbziqpx.burgers"
	 });
 };

connection.connect(function(err) {
	if (err) throw err;
});

module.exports = connection;