(function(){
	angular
		.module('lusify.mx', [
			'lusify',
			'ui.router', 'templates', 'pi']);

	angular
		.module('lusify.mx')
		.config(['$stateProvider',
			function($stateProvider) {

				$stateProvider
					.state('home', {
						url: '/',
						templateUrl: 'mx/home.tpl.html',
						controller: 'lusify.mx.homeCtrl',
						controllerAs: 'ctrl'
					});
			}])
		.run(['$rootScope',
			function($rootScope) {

				$rootScope.logout = function() {

				}
			}]);
})();