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