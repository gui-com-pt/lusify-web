(function(){
	angular
		.module('lusify.mx.contact', [
			'lusify', 'lusify.mx',
			'ui.router', 'templates', 'pi']);

	angular
		.module('lusify.mx.contact')
		.config(['$stateProvider',
			function($stateProvider) {

				$stateProvider
					.state('contact-home', {
						url: '/',
						templateUrl: 'mx/contact/home.tpl.html'
					});
			}])
		.run(['$rootScope',
			function($rootScope) {

				$rootScope.logout = function() {

				}
			}]);
})();