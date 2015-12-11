(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);

	function HomeFactory($http, $q) {
		var o = {};
o.saveColor = function(newcolor) {
	var q = $q.defer();
	$http.post('/api/user', newcolor).then(function(res) {
		q.resolve(res.data);
	});
	return q.promise;
};



		return o;
	}
})();
