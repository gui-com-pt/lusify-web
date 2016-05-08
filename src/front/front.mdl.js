(function(){
	angular
		.module('lusify.front', [
			'lusify', 'lusify.front.mx', 'lusify.front.service', 'lusify.front.consultant', 
			'ui.router', 'templates', 'pi']);

	angular
		.module('lusify.front')
		.config(['$stateProvider',
			function($stateProvider) {

				$stateProvider
					.state('home', {
						url: '/',
						templateUrl: 'front/home.tpl.html'
					})
					.state('order', {
						url: '/order',
						templateUrl: 'front/order/request.tpl.html'
					});
			}])
		.run(['$rootScope',
			function($rootScope) {

				$rootScope.logout = function() {

				}
			}]);
})();