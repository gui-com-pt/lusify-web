(function(){
	angular
		.module('lusify.mx.core', [
			'lusify', 'lusify.mx', 'lusify.mx.core.calendar', 'lusify.mx.core.contact', 
			'lusify.mx.core.folder', 'lusify.mx.core.mail',
			'ui.router', 'templates', 'pi']);

	angular
		.module('lusify.mx.core')
		.config(['$stateProvider',
			function($stateProvider) {

			}])
		.run(['$rootScope',
			function($rootScope) {

				$rootScope.logout = function() {

				}
			}]);
})();