babaOmoApp.controller("ResultCtrl", function ($scope, $state, $http, babaOmoFactory) {
    $scope.babaOmoFactory = babaOmoFactory.init($scope);
    var configs =  new ConfigMulti();
    configs.priorProbabilities = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];
    configs.childLoci = ($scope.babaOmoFactory.childInfo || {}).alleles;
    configs.fatherLoci = ($scope.babaOmoFactory.fatherInfo || {}).alleles;
    configs.populationCode = ($scope.babaOmoFactory.info || {}).country || "NIG";

    $scope.getVerdicts = function (cfgs) {
        configs = cfgs || configs;
        console.log("request", configs);
        $http.get(rootUrl('data/' + configs.populationCode + '-Data.json')).success(function (response) {
            console.log("population-allele-frequencies", response);
            var frequencies = response;
            if (Array.isArray(frequencies)) {
                $scope.verdicts = [];
                $scope.paternities = [];
                configs.getConfigs().map(function (config) {
                    var paternity = new Paternity();
                    paternity.config = config;
                    paternity.alleleFrequencies = frequencies;
                    $scope.paternities.push(paternity);
                    $scope.verdicts.push(paternity.getVerdict());
                });
            }
            else {
                throw new Error("response should be Array", "population-allele-frequencies");
            }
        }).error(errorhandler);
        /*return $http.post(webApiUrl('api/paternity/getVerdicts'), configs).success(function (response) {
            $scope.verdicts = (response || {}).Result;
            console.log("get-verdict", response);
        }).error(function (err, obj) {
            console.error(err, obj);
        });*/
    }

});