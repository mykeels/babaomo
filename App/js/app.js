var babaOmoApp = angular.module("BabaOmoApp", ["ui.router"]);

babaOmoApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/info');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: rootPartialsUrl('splash.html')
        })
        .state('info', {
            url: '/info',
            templateUrl: rootPartialsUrl('info.html'),
            controller: 'InfoCtrl'
        })
        .state('child', {
            url: '/child',
            templateUrl: rootPartialsUrl('child.html'),
            controller: 'AllelesCtrl'
        })
        .state('father', {
            url: '/father',
            templateUrl: rootPartialsUrl('father.html'),
            controller: 'AllelesCtrl'
        })
        .state('result', {
            url: '/result',
            templateUrl: rootPartialsUrl('result.html'),
            controller: 'ResultCtrl'
        });
});

function rootUrl(url) {
    return "" + url;
}

function webApiUrl(url) {
    return "/" + url;
}

function errorhandler(err, obj) {
    console.error(err, obj);
}

function rootPartialsUrl(url) {
    return rootUrl('partials/') + url;
}

function rootDirectivesUrl(url) {
    if (document.location.href.indexOf('localhost') >= 0) return rootUrl('js/directives/') + url;
    else return rootUrl(url);
}

function rootJsUrl(url) {
    if (document.location.href.indexOf('localhost') >= 0) return rootUrl('js/') + url;
    else return rootUrl(url);
}

var sampleFatherLoci = [
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