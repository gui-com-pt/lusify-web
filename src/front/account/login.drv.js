(function(){
	
	angular
		.module('lusify.front')
		.directive('login', ['account',
			function(account) {
				return {
					link: function(scope, elem, attrs) {
						scope.login = function(id, password) {
							account.login(id, password)
								.then(function(res) {

								});
						};
					}
				};
		}]);
})();