(function(){
	angular
		.module('lusify.mx.core.calendar', [
			'lusify', 'lusify.mx', 'lusify.mx.core',
			'ui.router', 'templates', 'pi']);

	angular
		.module('lusify.mx.core.calendar')
		.config(['$stateProvider',
			function($stateProvider) {

			}])
		.run(['$rootScope',
			function($rootScope) {

				$rootScope.logout = function() {

				}
			}]);
})();