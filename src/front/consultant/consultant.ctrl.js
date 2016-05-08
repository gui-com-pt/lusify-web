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