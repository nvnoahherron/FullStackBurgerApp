var orm = require("../config/orm.js");

var burger = {

	selectAll: function(cb){
		orm.selectAll(function(result){
			cb(result);
		});
	},

	insertOne: function(newBurger, cb){
		orm.insertOne(newBurger, function(result){
			cb(result);
		});
	},
	updateOne: function(updatedBurger, cb){
		orm.updateOne(updatedBurger, function(result){
			cb(result);
		});
	}
};

module.exports = burger;