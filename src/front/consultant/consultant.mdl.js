(function(){
	angular
		.module('lusify.front.consultant', ['ui.router', 'templates']);

	angular
		.module('lusify.front.consultant')
		.config(['$stateProvider',
			function($stateProvider) {
				$stateProvider
					.state('consultant', {
						url: '/consultoria',
						templateUrl: 'front/consultant/consultant.tpl.html',
						controller: 'lusify.front.consultant.consultantCtrl',
						controllerAs: 'ctrl'
					})
					.state('software-development', {
						url: '/desenvolvimento-de-software',
						templateUrl: 'front/consultant/software-dev.tpl.html',
						controller: 'lusify.front.consultant.softwareDevCtrl',
						controllerAs: 'ctrl'
					})
			}]);
})();