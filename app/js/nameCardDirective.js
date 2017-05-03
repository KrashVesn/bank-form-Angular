(function() {
	'use strict'

	angular
	.module('app')
	.directive('namecard', nameCardDirective);

	function nameCardDirective() {
		return {
			link: function(scope, element, attrs) {
				scope.$watch('cardname', function(newVal, oldVal) {
					if (scope.signupForm.cardname.$error.pattern == true) {
						scope.cardname = oldVal;
					}
					if (newVal == 1) {
						$scope.cardnumber = newVal;
					}
					if(newVal.length == 4) {
						if (scope.onKeyDownResult == 8) {
							
						} else {
							scope.cardname = newVal + '|' + ' ';
						}
					}
					if (newVal.length == 10 || newVal.length == 15) {
						if (scope.onKeyDownResult == 8) {
							
						} else {
							scope.cardname = newVal + ' ';
						}
					};
				})
			}
		}
	}

})();