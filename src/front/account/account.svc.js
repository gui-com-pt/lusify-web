(function(){
	
	angular
		.module('lusify.front')
		.run(['account', '$rootScope',
			function(account, $rootScope) {
				$rootScope.account = {
					authenticated: false,
					id: null
				};

			}])
		.provider('account', ['$logProvider',
			function($logProvider) {

				return {
					$get: ['$http', '$log', '$q', 
						function($http, $log, $q) {

							this.login = function(id, password) {
								var defer = $q.defer();

								$http.post('/login?id='+id+'&password='+password)
									.then(function(res) {
										$rootScope.account.authenticated = true;
										$rootScope.account.id = id;
										defer.resolve();
									}, function(res) {
										defer.reject(res);
									});

								return defer.promise;
							}

							this.logout = function() {
								window.location = '/bye.html';
							}
						}
					]
				};
			}
		]);
})();