Array.prototype.without = function (vals) {
    var arr = this;
    return arr.filter(function (x) {
        return vals.indexOf(x) < 0;
    });
}

babaOmoApp.directive("allelePair", function () {
    return {
        restrict: 'AE',
        templateUrl: rootDirectivesUrl('allele-pair.dir.html'),
        scope: {
            allelePair: '=',
            alleleNames: '=',
            selectedAlleleNames: '=',
            index: '@',
            removeAllelePair: '&removeAllelePair',
            changeAlleleName: '@'
        },
        link: function ($scope, $element, attrs) {
            
        },
        controller: function ($scope, babaOmoFactory) {
            $scope.babaOmoFactory = babaOmoFactory.init($scope);
            
            $scope.chooseAlleleName = function (name) {
                $scope.allelePair.validate();
            }

            $scope.getChangeAlleleName = function () {
                $scope.changeAlleleName = (String.isNullOrEmpty($scope.changeAlleleName) ? "false" : $scope.changeAlleleName);
                $scope.changeAlleleName = $scope.changeAlleleName.toString().toLowerCase() == "false" ? false : true;
                return $scope.changeAlleleName;
            }
        }
    }
})