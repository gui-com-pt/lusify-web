(function(){
	angular
		.module('lusify.front.mx', ['lusify', 'pi', 'ui.router', 'templates']);

	angular
		.module('lusify.front.mx')
		.config(['$stateProvider',
			function($stateProvider) {

				$stateProvider
					.state('mx-overview', {
						url: '/planos',
						templateUrl: 'front/mx/overview.tpl.html'
					})
					.state('mx-private-overview', {
						url: '/privado',
						templateUrl: 'front/mx/private-overview.tpl.html'
					})
					.state('mx-hosted-overview', {
						url: '/privado',
						templateUrl: 'front/mx/hosted-overview.tpl.html'
					});
			}]);
})();