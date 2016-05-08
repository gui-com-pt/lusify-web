(function(){
	angular
		.module('lusify.mx.core.mail', [
			'lusify', 'lusify.mx', 'lusify.mx.core',
			'ui.router', 'templates', 'pi']);

	angular
		.module('lusify.mx.core.mail')
		.config(['$stateProvider',
			function($stateProvider) {

			}])
		.run(['$rootScope',
			function($rootScope) {

				$rootScope.logout = function() {

				}
			}]);
})();