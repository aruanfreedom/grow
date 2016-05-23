;
(function() {
    var grow = angular.module('growApp', []);

    grow.controller("usersCtrl", function($scope, $http) {
        var url = 'json/users.json';

        $http.get(url).success(function(response) {
            $scope.users = response;
        });

        $scope.predicate = 'first_name';
        $scope.reverse = true;
        $scope.order = function(predicate) {
            $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
            $scope.predicate = predicate;
        };

        $http.get('json/combobox.json').success(function(response) {
            $scope.comboboxes = response;
        });

        $scope.select = function() {
            var url = $scope.selectBtn.url;
            $http.get(url).success(function(response) {
                $scope.users = response;
            });
        };

        $scope.date = {
            value: new Date(2016, 5, 22)
        };
    });

})();
