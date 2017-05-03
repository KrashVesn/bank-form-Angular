(function() {
	'use strict'

	angular
	.module('app')
	.controller('formCtrl', formController);

	function formController($scope, $filter) {

		$scope.active = true;
		$scope.valuta = 'RUB';
		$scope.firstname ='';
		$scope.lastname ='';
		$scope.cardname ='';
		$scope.cardnumber = 0;
		$scope.reg_cardname = /^[0-9| ]+$/;
		// console.log($scope.signupForm.firstname.$error.require);
		$scope.edit = function() {
			$scope.active = !$scope.active;
		}

		$scope.pay = function() {
			$scope.active = false;
		}

		var getKeyboardEventResult = function (keyEvent){
			return keyEvent.keyCode;
		};

		$scope.onKeyDown = function ($event) {
			$scope.onKeyDownResult = getKeyboardEventResult($event);
		};

		$scope.$watch('summa', function(newVal, oldVal) {
			if (angular.isNumber(newVal)) {
				$scope.summa = oldVal;
			}
		});

		$scope.$watch('firstname', function(newVal, oldVal) {

			var regexp = /^[a-zA-Z]+$/;

			if (regexp.test(newVal) === false & $scope.firstname.length > 0) {
				$scope.firstname = oldVal;
			} else {
				$scope.firstname = $filter('uppercase')(newVal);
			}

		});

		$scope.$watch('lastname', function(newVal, oldVal) {
			
			var regexp = /^[a-zA-Z]+$/;

			if (regexp.test(newVal) === false & $scope.lastname.length > 0) {
				$scope.lastname = oldVal;
			} else {
				$scope.lastname = $filter('uppercase')(newVal);
			}

		})

		$scope.$watch('cardname', function(newVal, oldVal) {

			var regexp = /^[0-9| ]+$/;
			var length = $scope.cardname.length;
			var i = oldVal.length - length;

			if (regexp.test(newVal) === false & length > 0) {
				$scope.cardname = oldVal;
			}

			$scope.cardnumber = $scope.cardname.charAt(0);

			if ($scope.onKeyDownResult == 8 || i >= 1) {



				for (var j = 0; j++; j < length) {
					// if(newVal.charAt(j) != oldVal.charAt(j)) {

					// }
				}

			} else {

				if (newVal.charAt(4) != '|' & length > 4) {
					$scope.cardname = newVal.slice(0,4) + '|' + newVal.slice(4, length);
				}

				if(newVal.charAt(5) != ' ' & length > 5) {
					$scope.cardname = newVal.slice(0,5) + ' ' + newVal.slice(5, length);
				}

				if (newVal.charAt(10) != ' ' & length > 10) {
					$scope.cardname = newVal.slice(0, 10) + ' ' + newVal.slice(10, length);
				}

				if (newVal.charAt(15) != ' ' & length > 15) {
					$scope.cardname = newVal.slice(0, 15) + ' ' + newVal.slice(15, length);
				}
			}
		})

		$scope.$watch('code', function(newVal, oldVal) {
			var regexp = /^[0-9]+$/;
			length = $scope.code.length;
			if (regexp.test(newVal) === false & length > 0 ) {
				$scope.code = oldVal;
			}
		});



	};
})();