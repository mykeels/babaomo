﻿var sampleFatherLoci = [
    {
        "name": "D3S1358",
        "allele1": 15,
        "allele2": 16
    },
    {
        "name": "D7S820",
        "allele1": 11,
        "allele2": 11
    },
    {
        "name": "VWA",
        "allele1": 13,
        "allele2": 16
    },
    {
        "name": "FGA",
        "allele1": 22,
        "allele2": 28
    },
    {
        "name": "D8S1179",
        "allele1": 13,
        "allele2": 14
    },
    {
        "name": "D21S11",
        "allele1": 28,
        "allele2": 32.2
    },
    {
        "name": "D18S51",
        "allele1": 17,
        "allele2": 18
    },
    {
        "name": "D5S818",
        "allele1": 8,
        "allele2": 12
    }
]

var sampleChildLoci = [
    {
        "name": "D3S1358",
        "allele1": 16,
        "allele2": 17
    },
    {
        "name": "D7S820",
        "allele1": 8,
        "allele2": 11
    },
    {
        "name": "VWA",
        "allele1": 14,
        "allele2": 16
    },
    {
        "name": "FGA",
        "allele1": 21,
        "allele2": 28
    },
    {
        "name": "D8S1179",
        "allele1": 14,
        "allele2": 15
    },
    {
        "name": "D21S11",
        "allele1": 28,
        "allele2": 32.2
    },
    {
        "name": "D18S51",
        "allele1": 17,
        "allele2": 18
    },
    {
        "name": "D5S818",
        "allele1": 8,
        "allele2": 14
    }
]

babaOmoApp.controller("ResultCtrl", function ($scope, $state, $http, babaOmoFactory) {
    $scope.babaOmoFactory = babaOmoFactory.init($scope);
    var configs =  new ConfigMulti();
    configs.priorProbabilities = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];
    configs.childLoci = ($scope.babaOmoFactory.childInfo || {}).alleles || sampleChildLoci;
    configs.fatherLoci = ($scope.babaOmoFactory.fatherInfo || {}).alleles || sampleFatherLoci;
    configs.populationCode = "NIG"; //($scope.babaOmoFactory.info || {}).country || "NIG";

    $scope.getVerdicts = function (cfgs) {
        configs = cfgs || configs;
        console.log("request", configs);
        $http.get(rootUrl('Data/' + configs.populationCode + '-Data.json')).success(function (response) {
            console.log("population-allele-frequencies", response);
            var frequencies = response;
            if (Array.isArray(frequencies)) {
                $scope.verdicts = [];
                configs.getConfigs().map(function (config) {
                    var paternity = new Paternity();
                    paternity.config = config;
                    paternity.alleleFrequencies = frequencies;
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