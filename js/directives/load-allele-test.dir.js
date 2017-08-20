babaOmoApp.directive("loadAlleleTest", function () {
    return {
        link: function ($scope, $element, attrs) {
            $element.click(function () {
                $scope.alleleInfo.loadTests();
                $scope.$applyAsync();
            });
        }
    }
});