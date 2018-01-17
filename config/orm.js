var connection = require("./connection.js");

var orm = {
	selectAll: function(cb){
		var queryString = "SELECT * FROM burgers";
		connection.query(queryString, function(err, result){
			if (err) {
				console.log(err);
			}
			cb(result);
		})
	},
	insertOne: function(newBurger, cb){
		var queryString = "INSERT INTO burgers SET ?";
		connection.query(queryString, newBurger, function(err, result){
			if (err) {
				console.log(err);
			}
			cb(result);
		})
	},
	updateOne: function(updatedBurger, cb){
		var queryString = "UPDATE burgers SET devoured=true WHERE ?";
		connection.query(queryString, updatedBurger, function(err, result){
			if (err) {
				console.log(err);
			}
			cb(result);
		})
	}
};

module.exports = orm;

// this will go into the API routes middleware
// orm.selectAll(function(result){
// 	console.log(result);
// 	res.send(result);
// })

// app.post('/new-burger', function(req, res) {
// 	// api middleware insert example
// 	orm.insertOne(req.body, function(result){
// 		res.send(result);
// 	})
// })
