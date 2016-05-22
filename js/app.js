var LansApp = angular.module('LansApp', ['ngRoute']);

LansApp.config(function($routeProvider) {
	$routeProvider
		.when('/main', {
			templateUrl: 'views/main.html',
			controller: 'LansController'
		})
		.when('/kontakt/:id', {
			templateUrl: 'views/kontakt.html',
			controller: 'KontaktController'
		})
		.otherwise({
			redirectTo: '/main'
		});
});

LansApp.controller('LansController', function($scope, $rootScope){
});

LansApp.controller('KontaktController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.kontaktId = $routeParams.kontaktId;
  }]);

LansApp.directive('header', function() {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: "views/header.html"
  }
});

LansApp.directive('footer', function() {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: "views/footer.html"
  }
});

LansApp.directive('nav', function() {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: "views/nav.html"
  }
});