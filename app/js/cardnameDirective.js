(function() {
	'use strict'

	angular
		.module('app')
		.directive('cardname', cardnameDirective);

	function cardnameDirective() {
		return {
			link: function(scope, element, attrs) {

				scope.$watch('cardname', function(newVal, oldVal) {
					var input = document.getElementById('cardname');
					console.log(document.selection.createRange());
				})
			}
		}
	};	

})();