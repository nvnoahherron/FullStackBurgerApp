var connection = require("./connection.js");

var orm = {
	selectAll: function(res){
		var queryString = "SELECT * FROM burgers";
		connection.query(queryString, function(err, result){
			if (err) throw err;

			var burgerDevoured = [];
			var burgerNotDevoured = [];

			console.log(result);

			for (var i = 0; i < result.length; i++) {
				if (result[i].devoured) {
					burgerDevoured.push(result[i]);
				} else {
					burgerNotDevoured.push(result[i]);
				}
			}
		})
	}
}