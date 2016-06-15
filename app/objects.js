exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
	alterContext: function(fn, obj) {
		return fn.call(obj);
	},

	alterObjects: function(constructor, greeting) {
		constructor.prototype.greeting = greeting;
	},

	iterate: function(obj) {

		var listOfProp = [];

		for (var prop in obj) {
			if (obj.hasOwnProperty(prop)) {
				listOfProp.push(prop + ':' + obj[prop]);
			}
		}
		return listOfProp;
	}
};