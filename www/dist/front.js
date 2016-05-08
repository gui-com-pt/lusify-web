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
(function(){
	
	angular
		.module('lusify.front')
		.run(['account', '$rootScope',
			function(account, $rootScope) {
				$rootScope.account = {
					authenticated: false,
					id: null
				};

			}])
		.provider('account', ['$logProvider',
			function($logProvider) {

				return {
					$get: ['$http', '$log', '$q', 
						function($http, $log, $q) {

							this.login = function(id, password) {
								var defer = $q.defer();

								$http.post('/login?id='+id+'&password='+password)
									.then(function(res) {
										$rootScope.account.authenticated = true;
										$rootScope.account.id = id;
										defer.resolve();
									}, function(res) {
										defer.reject(res);
									});

								return defer.promise;
							}

							this.logout = function() {
								window.location = '/bye.html';
							}
						}
					]
				};
			}
		]);
})();
(function(){
	
	angular
		.module('lusify.front')
		.directive('login', ['account',
			function(account) {
				return {
					link: function(scope, elem, attrs) {
						scope.login = function(id, password) {
							account.login(id, password)
								.then(function(res) {

								});
						};
					}
				};
		}]);
})();
(function(){
	angular
		.module('lusify.front.consultant')
		.controller('lusify.front.consultant.consultantCtrl', ['$scope',
			function($scope) {

				this.consultants = [
					{
						name: 'Website',
						imageUrl: '',
						description: 'Alojamento Web em Windows e Linux apartir de 1 euro por mês.'
					},
					{
						name: 'Aplicação Mobile',
						imageUrl: '',
						description: 'Em poucos minutos podes criar a tua radio online!'
					},
					{
						name: 'SEO',
						imageUrl: '',
						description: 'Serviços de voz: Teamspeak.'
					},
					{
						name: 'Testes de Segurança',
						imageUrl: '',
						description: 'IRC Bouncers, configuração de bots, criação de redes IRC'
					},
					{
						name: 'Micro Serviços',
						imageUrl: '',
						description: 'O nosso serviço de Gamming'
					},
					{
						name: 'APIs externas',
						imageUrl: '',
						description: 'API para enviar SMS'
					}
				];
			}]);
})();
(function(){
	angular
		.module('lusify.front.consultant')
		.controller('lusify.front.consultant.softwareDevCtrl', [
			function() {

			}]);
})();
(function(){
	
	angular
		.module('lusify.front.mx')
		.controller('lusify.mx.mxCtrl', ['$rootScope',
			function($rootScope) {

			}]);
})();
(function(){
	angular
		.module('lusify.front')
		.controller('lusify.front.service.serviceCtrl', ['$scope',
			function($scope) {


				this.services = [
					{
						name: 'Alojamento Web',
						imageUrl: '',
						description: 'Alojamento Web em Windows e Linux apartir de 1 euro por mês.'
					},
					{
						name: 'Radio Streamming',
						imageUrl: '',
						description: 'Em poucos minutos podes criar a tua radio online!'
					},
					{
						name: 'Teamspeak',
						imageUrl: '',
						description: 'Serviços de voz: Teamspeak.'
					},
					{
						name: 'IRC',
						imageUrl: '',
						description: 'IRC Bouncers, configuração de bots, criação de redes IRC'
					},
					{
						name: 'Gamming',
						imageUrl: '',
						description: 'O nosso serviço de Gamming'
					},
					{
						name: 'SMS',
						imageUrl: '',
						description: 'API para enviar SMS'
					},
					{
						name: 'P2P/Seedbox',
						imageUrl: '',
						description: 'Servidor dedicado/virtual para fins de torrents'
					},
					{
						name: 'Built In',
						imageUrl: '',
						description: 'Instalação, Migração e Manutenção de serviços built in como CMS ou Frameworks',
						services: [
							{
								name: 'Wordpress',
								imageUrl: '',
								description: 'Wordpress ou Wordpress Multisite'
							},
							{
								name: 'Disclousure',
								imageUrl: '',
								description: 'Famosa plataforma de Q/A usada pelas principais frameworks'
							},
							{
								name: 'Joomla',
								imageUrl: '',
								description: 'Wordpress ou Wordpress Multisite'
							}
						]
					}
				];
			}]);
})();