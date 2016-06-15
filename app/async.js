exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
	async: function(value) {
		var defer = $.Deferred();
		setTimeout(function() {
			defer.resolve(value);
		}, 1000);
		return defer.promise();
	},

	manipulateRemoteData: function(url) {
		var defer = $.Deferred();
		$.ajax(url).then(function(res) {
			var people = res.people.map(function(person) {
				return person.name;
			});
			defer.resolve(people.sort());
		});
		return defer.promise();
	}
};