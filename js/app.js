/* main script file for index.html */

angular.module('Coordinating', [])
    .controller('MainCtrl', function($scope) {

        $scope.confirm = false;
        $scope.signUp = {};

        $scope.complete = function() {
            $scope.confirm = true;
        }

        /* nony */

    });