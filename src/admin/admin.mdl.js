(function() {
	angular
		.module('lusify.admin', ['lusify', 'ui.router', 'templates', 'pi']);

	angular
		.module('lusify.admin')
		.config(['$stateProvider',
			function($stateProvider) {
				$stateProvider
					.state('admin', {
						url: '/admin',
						abstract: true,
						controller: 'lusify.admin.adminCtrl'
					})
					.state('admin.home', {
						url: '/home',
						templateUrl: 'admin/home.tpl.html',
						controller: 'lusify.admin.homeCtrl',
						controllerAs: 'ctrl'
					})
					.state('admin.about', {
						url: '/about',
						templateUrl: 'admin/about.tpl.html',
						controller: 'lusify.admin.aboutCtrl',
						controllerAs: 'ctrl'
					})
			}])
		.run(['$rootScope',
			function($rootScope) {
				$rootScope.admin = true;
			}]);
})();