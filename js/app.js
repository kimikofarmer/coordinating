

angular.module('Coordinating', [])
    .controller('MainCtrl', function($scope) {

        $scope.confirm = false;
        $scope.signUp = {};

        $scope.complete = function() {
            $scope.confirm = true;
        };

    })
    .directive('passwordMatch', function() {
        return {
            require:'ngModel',
            link: function(scope, elem, attrs, controller) {
                controller.$validators.passwordMatch = function(modelValue) {
                    return scope.signUp.password === modelValue;
                }
            }
        };
    })
    .directive('validDate', function() {
        return {
            require:'ngModel',
            link: function(scope, elem, attrs, controller) {
                controller.$validators.validDate = function(modelValue) {
                    var imp = Date.parse(modelValue);
                    return !isNaN(imp);
                }
            }
        };
    })
    .directive('over13', function() {
        return {
            require:'ngModel',
            link: function(scope, elem, attrs, controller) {
                controller.$validators.over13 = function(modelValue) {
                    return (new Date().getFullYear() - new Date(modelValue).getFullYear()) >= 13;
                }
            }
        };
    });
