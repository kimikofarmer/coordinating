.directive('passwordMatch', function() {
    return {
        require:'ngModel',
        link: function(scope, elem, attrs, controller) {
            controller.$validators.passwordMatch = function() {
                return $scope.password === $scope.confirmPassword;
            }
        }
    };
})
.directive('validDate', function() {
    return {
        require:'ngModel',
        link: function(scope, elem, attrs, controller) {
            controller.$validators.validDate = function(modelValue) {
                return Date.parse(modelValue) !== NaN;
            }
        }
    };
})
.directive('over13', function() {
    return {
        require:'ngModel',
        link: function(scope, elem, attrs, controller) {
            controller.$validators.over13 = function(modelValue) {
                return (new Date(modelValue).getFullYear()) - (new Date().getFullYear()) >= 13;
            }
        }
    };
})
