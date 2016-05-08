(function(){
	angular
		.module('lusify.front.service', ['lusify', 'pi', 'ui.router', 'templates']);

	angular
		.module('lusify.front.service')
		.config(['$stateProvider',
			function($stateProvider) {

				$stateProvider
					.state('services', {
						url: '/servicos',
						templateUrl: 'front/service/service.tpl.html',
						controller: 'lusify.front.service.serviceCtrl',
						controllerAs: 'ctrl'
					})
					.state('built-in', {
						url: '/built-in',
						templateUrl: 'front/service/built-in.tpl.html'
					})
					.state('irc-bnc', {
						url: '/irc-bnc',
						templateUrl: 'front/service/irc-bnc.tpl.html'
					})
					.state('p2p', {
						url: '/p2p',
						templateUrl: 'front/service/p2p.tpl.html'
					})
					.state('radio-broadcast', {
						url: '/radio-broadcast',
						templateUrl: 'front/service/radio-broadcast.tpl.html'
					})
					.state('teamspeak', {
						url: '/teamspeak',
						templateUrl: 'front/service/teamspeak.tpl.html'
					})
					.state('web-hosting', {
						url: '/web-hosting',
						templateUrl: 'front/service/web-hosting.tpl.html'
					});
			}]);
})();