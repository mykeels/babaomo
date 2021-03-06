﻿babaOmoApp.factory("babaOmoFactory", function ($http) {
    var obj = {}
    obj.init = function ($scope) {
        $scope.getCountries = function () {
            return $http.get(rootJsUrl("countries.json")).error(errorhandler);
        }
        $scope.getAlleles = function () {
            return $http.get(rootJsUrl("alleles.json")).error(errorhandler);
        }
        $scope.String = String;
        $scope.Math = Math;
        $scope.Array = Array;
        $scope.Number = Number;
        return obj;
    }
    return obj;
});