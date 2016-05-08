(function(){
	angular
		.module('lusify.mx.mail')
		.directive('sidebarFolders', ['$rootScope',
			function($rootScope) {

				return {
					templateUrl: 'mx/mail/sidebar-folders.tpl.html',
					link: function(scope, elem, attrs) {
						
					}
				}
			}]);
})();