(function(){
	angular
		.module('lusify.mx.core.folder', [
			'lusify', 'lusify.mx', 'lusify.mx.core',
			'ui.router', 'templates', 'pi']);

	angular
		.module('lusify.mx.core.folder')
		.config(['$stateProvider',
			function($stateProvider) {

			}])
		.run(['$rootScope',
			function($rootScope) {

				$rootScope.logout = function() {

				}
			}]);
})();