(function(){
	angular
		.module('lusify.mx.calendar', [
			'lusify', 'lusify.mx',
			'ui.router', 'templates', 'pi']);

	angular
		.module('lusify.mx.calendar')
		.config(['$stateProvider',
			function($stateProvider) {

				$stateProvider
					.state('calendar-home', {
						url: '/',
						templateUrl: 'mx/calendar/home.tpl.html'
					});
			}])
		.run(['$rootScope',
			function($rootScope) {

				$rootScope.logout = function() {

				}
			}]);
})();