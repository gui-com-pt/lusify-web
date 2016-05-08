(function(){
	angular
		.module('lusify.mx.core.contact', [
			'lusify', 'lusify.mx', 'lusify.mx.core',
			'ui.router', 'templates', 'pi']);

	angular
		.module('lusify.mx.core.contact')
		.config(['$stateProvider',
			function($stateProvider) {

			}])
		.run(['$rootScope',
			function($rootScope) {

				$rootScope.logout = function() {

				}
			}]);
})();