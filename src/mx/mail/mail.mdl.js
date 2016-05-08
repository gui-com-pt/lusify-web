(function(){
	angular
		.module('lusify.mx.mail', [
			'lusify', 'lusify.mx',
			'ui.router', 'templates', 'pi']);

	angular
		.module('lusify.mx.mail')
		.config(['$stateProvider',
			function($stateProvider) {

				$stateProvider
					.state('mail-home', {
						url: '/',
						templateUrl: 'mx/mail/home.tpl.html'
					})
					.state('mail-compose', {
						url: '/compose',
						templateUrl: 'mx/mail/compose.tpl.html',
						controller: 'lusify.mx.mail.composeCtrl',
						controllerAs: 'ctrl'
					})
					.state('mail-read', {
						url: '/read/:id',
						templateUrl: 'mx/mail/mail-read.tpl.html',
						controller: 'lusify.mx.mail.mailReadCtrl',
						controllerAs: 'ctrl'
					})
					.state('mail-inbox', {
						url: '/inbox',
						templateUrl: 'mx/mail/inbox.tpl.html',
						controller: 'lusify.mx.mail.inboxCtrl',
						controllerAs: 'ctrl'
					})
					.state('mail-folder', {
						url: '/folder/:id',
						templateUrl: 'mx/mail/folder-view.tpl.html',
						controller: 'lusify.mx.mail.folderViewCtrl',
						controllerAs: 'ctrl'
					});;
			}])
		.run(['$rootScope',
			function($rootScope) {

				$rootScope.logout = function() {

				}
			}]);
})();