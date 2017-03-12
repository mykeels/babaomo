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
    if (document.location.href.indexOf('localhost') >= 0) return rootUrl('partials/') + url;
    else return rootUrl(url);
}

function rootDirectivesUrl(url) {
    if (document.location.href.indexOf('localhost') >= 0) return rootUrl('js/directives/') + url;
    else return rootUrl(url);
}

function rootJsUrl(url) {
    if (document.location.href.indexOf('localhost') >= 0) return rootUrl('js/') + url;
    else return rootUrl(url);
}
function AlleleFrequency() {
    this.locusName = "";
    this.populationCode = "";
    this.populationName = "";
    this.alleleNo = 0;
    this.frequency = 0;
    return this;
}

var alleles = [
  "D3S1358",
  "D7S820",
  "VWA",
  "FGA",
  "D8S1179",
  "D21S11",
  "D18S51",
  "D5S818"
]

var testAlleleFrequencies = [
 {
     "locusName": "D3S1358",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 11,
     "frequency": 1
 },
 {
     "locusName": "D3S1358",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 12,
     "frequency": 0
 },
 {
     "locusName": "D3S1358",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 13,
     "frequency": 0
 },
 {
     "locusName": "D3S1358",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 14,
     "frequency": 13.5
 },
 {
     "locusName": "D3S1358",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 15,
     "frequency": 31.3
 },
 {
     "locusName": "D3S1358",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 16,
     "frequency": 31.3
 },
 {
     "locusName": "D3S1358",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 17,
     "frequency": 17.7
 },
 {
     "locusName": "D3S1358",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 18,
     "frequency": 5.2
 },
 {
     "locusName": "D3S1358",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 19,
     "frequency": 0
 },
 {
     "locusName": "VWA",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 13,
     "frequency": 0
 },
 {
     "locusName": "VWA",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 14,
     "frequency": 8.7
 },
 {
     "locusName": "VWA",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 15,
     "frequency": 30.4
 },
 {
     "locusName": "VWA",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 16,
     "frequency": 23.9
 },
 {
     "locusName": "VWA",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 17,
     "frequency": 17.4
 },
 {
     "locusName": "VWA",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 18,
     "frequency": 8.7
 },
 {
     "locusName": "VWA",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 19,
     "frequency": 6.5
 },
 {
     "locusName": "VWA",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 20,
     "frequency": 1.1
 },
 {
     "locusName": "VWA",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 21,
     "frequency": 2.2
 },
 {
     "locusName": "VWA",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 22,
     "frequency": 1.1
 },
 {
     "locusName": "FGA",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 16,
     "frequency": 0
 },
 {
     "locusName": "FGA",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 17,
     "frequency": 0
 },
 {
     "locusName": "FGA",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 18,
     "frequency": 0
 },
 {
     "locusName": "FGA",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 18.2,
     "frequency": 0
 },
 {
     "locusName": "FGA",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 19,
     "frequency": 7.6
 },
 {
     "locusName": "FGA",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 20,
     "frequency": 3.3
 },
 {
     "locusName": "FGA",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 20.2,
     "frequency": 0
 },
 {
     "locusName": "FGA",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 21,
     "frequency": 10.9
 },
 {
     "locusName": "FGA",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 21.2,
     "frequency": 0
 },
 {
     "locusName": "FGA",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 22,
     "frequency": 18.5
 },
 {
     "locusName": "FGA",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 22.2,
     "frequency": 0
 },
 {
     "locusName": "FGA",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 23,
     "frequency": 18.5
 },
 {
     "locusName": "FGA",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 23.2,
     "frequency": 0
 },
 {
     "locusName": "FGA",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 24,
     "frequency": 17.4
 },
 {
     "locusName": "FGA",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 24.2,
     "frequency": 0
 },
 {
     "locusName": "FGA",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 25,
     "frequency": 12
 },
 {
     "locusName": "FGA",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 25.2,
     "frequency": 0
 },
 {
     "locusName": "FGA",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 26,
     "frequency": 3.3
 },
 {
     "locusName": "FGA",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 26.2,
     "frequency": 0
 },
 {
     "locusName": "FGA",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 27,
     "frequency": 2.2
 },
 {
     "locusName": "FGA",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 27.2,
     "frequency": 1.1
 },
 {
     "locusName": "FGA",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 28,
     "frequency": 5.4
 },
 {
     "locusName": "FGA",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 29,
     "frequency": 0
 },
 {
     "locusName": "FGA",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 31,
     "frequency": 0
 },
 {
     "locusName": "FGA",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 32.2,
     "frequency": 0
 },
 {
     "locusName": "D8S1179",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 7,
     "frequency": 0
 },
 {
     "locusName": "D8S1179",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 8,
     "frequency": 0
 },
 {
     "locusName": "D8S1179",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 9,
     "frequency": 0
 },
 {
     "locusName": "D8S1179",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 10,
     "frequency": 0
 },
 {
     "locusName": "D8S1179",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 11,
     "frequency": 1.1
 },
 {
     "locusName": "D8S1179",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 12,
     "frequency": 11.7
 },
 {
     "locusName": "D8S1179",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 13,
     "frequency": 25.5
 },
 {
     "locusName": "D8S1179",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 14,
     "frequency": 37.2
 },
 {
     "locusName": "D8S1179",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 15,
     "frequency": 21.3
 },
 {
     "locusName": "D8S1179",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 16,
     "frequency": 3.2
 },
 {
     "locusName": "D8S1179",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 17,
     "frequency": 0
 },
 {
     "locusName": "D8S1179",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 18,
     "frequency": 0
 },
 {
     "locusName": "D8S1179",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 19,
     "frequency": 0
 },
 {
     "locusName": "D21S11",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 23.2,
     "frequency": 0
 },
 {
     "locusName": "D21S11",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 24.2,
     "frequency": 0
 },
 {
     "locusName": "D21S11",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 25,
     "frequency": 1
 },
 {
     "locusName": "D21S11",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 25.2,
     "frequency": 0
 },
 {
     "locusName": "D21S11",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 26,
     "frequency": 1
 },
 {
     "locusName": "D21S11",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 27,
     "frequency": 4.2
 },
 {
     "locusName": "D21S11",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 28,
     "frequency": 28.1
 },
 {
     "locusName": "D21S11",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 28.2,
     "frequency": 0
 },
 {
     "locusName": "D21S11",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 29,
     "frequency": 16.7
 },
 {
     "locusName": "D21S11",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 29.2,
     "frequency": 1
 },
 {
     "locusName": "D21S11",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 30,
     "frequency": 15.6
 },
 {
     "locusName": "D21S11",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 30.2,
     "frequency": 2.1
 },
 {
     "locusName": "D21S11",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 31,
     "frequency": 10.4
 },
 {
     "locusName": "D21S11",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 31.2,
     "frequency": 2.1
 },
 {
     "locusName": "D21S11",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 32,
     "frequency": 3.1
 },
 {
     "locusName": "D21S11",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 32.2,
     "frequency": 6.3
 },
 {
     "locusName": "D21S11",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 33,
     "frequency": 0
 },
 {
     "locusName": "D21S11",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 33.2,
     "frequency": 2.1
 },
 {
     "locusName": "D21S11",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 34,
     "frequency": 1
 },
 {
     "locusName": "D21S11",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 34.2,
     "frequency": 0
 },
 {
     "locusName": "D21S11",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 35,
     "frequency": 3.1
 },
 {
     "locusName": "D21S11",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 36,
     "frequency": 2.1
 },
 {
     "locusName": "D21S11",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 37,
     "frequency": 0
 },
 {
     "locusName": "D18S51",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 9,
     "frequency": 0
 },
 {
     "locusName": "D18S51",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 10,
     "frequency": 0
 },
 {
     "locusName": "D18S51",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 10.2,
     "frequency": 0
 },
 {
     "locusName": "D18S51",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 11,
     "frequency": 1.1
 },
 {
     "locusName": "D18S51",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 11.2,
     "frequency": 0
 },
 {
     "locusName": "D18S51",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 12,
     "frequency": 9.6
 },
 {
     "locusName": "D18S51",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 13,
     "frequency": 2.1
 },
 {
     "locusName": "D18S51",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 13.2,
     "frequency": 1.1
 },
 {
     "locusName": "D18S51",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 14,
     "frequency": 5.3
 },
 {
     "locusName": "D18S51",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 14.2,
     "frequency": 0
 },
 {
     "locusName": "D18S51",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 15,
     "frequency": 19.1
 },
 {
     "locusName": "D18S51",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 15.2,
     "frequency": 1.1
 },
 {
     "locusName": "D18S51",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 16,
     "frequency": 9.6
 },
 {
     "locusName": "D18S51",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 17,
     "frequency": 22.3
 },
 {
     "locusName": "D18S51",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 18,
     "frequency": 10.6
 },
 {
     "locusName": "D18S51",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 19,
     "frequency": 8.5
 },
 {
     "locusName": "D18S51",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 20,
     "frequency": 6.4
 },
 {
     "locusName": "D18S51",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 21,
     "frequency": 2.1
 },
 {
     "locusName": "D18S51",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 22,
     "frequency": 0
 },
 {
     "locusName": "D18S51",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 23,
     "frequency": 1.1
 },
 {
     "locusName": "D18S51",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 24,
     "frequency": 0
 },
 {
     "locusName": "D18S51",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 25,
     "frequency": 0
 },
 {
     "locusName": "D18S51",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 27,
     "frequency": 0
 },
 {
     "locusName": "D5S818",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 6,
     "frequency": 0
 },
 {
     "locusName": "D5S818",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 7,
     "frequency": 1
 },
 {
     "locusName": "D5S818",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 8,
     "frequency": 4.2
 },
 {
     "locusName": "D5S818",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 9,
     "frequency": 2.1
 },
 {
     "locusName": "D5S818",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 10,
     "frequency": 15.6
 },
 {
     "locusName": "D5S818",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 11,
     "frequency": 21.9
 },
 {
     "locusName": "D5S818",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 12,
     "frequency": 33.3
 },
 {
     "locusName": "D5S818",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 13,
     "frequency": 19.8
 },
 {
     "locusName": "D5S818",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 14,
     "frequency": 2.1
 },
 {
     "locusName": "D5S818",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 15,
     "frequency": 0
 },
 {
     "locusName": "D5S818",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 16,
     "frequency": 0
 },
 {
     "locusName": "D13S317",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 6,
     "frequency": 0
 },
 {
     "locusName": "D13S317",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 7,
     "frequency": 0
 },
 {
     "locusName": "D13S317",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 8,
     "frequency": 2.1
 },
 {
     "locusName": "D13S317",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 9,
     "frequency": 0
 },
 {
     "locusName": "D13S317",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 10,
     "frequency": 2.1
 },
 {
     "locusName": "D13S317",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 11,
     "frequency": 24.5
 },
 {
     "locusName": "D13S317",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 12,
     "frequency": 51.1
 },
 {
     "locusName": "D13S317",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 13,
     "frequency": 12.8
 },
 {
     "locusName": "D13S317",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 14,
     "frequency": 6.4
 },
 {
     "locusName": "D13S317",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 15,
     "frequency": 1.1
 },
 {
     "locusName": "D7S820",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 6,
     "frequency": 1.1
 },
 {
     "locusName": "D7S820",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 7,
     "frequency": 1.1
 },
 {
     "locusName": "D7S820",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 8,
     "frequency": 23.4
 },
 {
     "locusName": "D7S820",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 9,
     "frequency": 10.6
 },
 {
     "locusName": "D7S820",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 10,
     "frequency": 34
 },
 {
     "locusName": "D7S820",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 11,
     "frequency": 21.3
 },
 {
     "locusName": "D7S820",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 12,
     "frequency": 6.4
 },
 {
     "locusName": "D7S820",
     "populationCode": "NIG",
     "populationName": "Nigeria",
     "alleleNo": 13,
     "frequency": 2.1
 },
  {
      "locusName": "D7S820",
      "populationCode": "NIG",
      "populationName": "Nigeria",
      "alleleNo": 14,
      "frequency": 0
  }
]

AlleleFrequency.getTestAlleleFrequencies = function () {
    return testAlleleFrequencies.map(function (af) {
        var alleleF = new AlleleFrequency();
        for (var key in af) {
            alleleF[key] = af[key];
        }
        return alleleF;
    });
}
function Config() {
    this.priorProbability = 0;
    this.childLoci = [];
    this.fatherLoci = [];
    this.motherLoci = [];
    this.populationCode = "";
    this.init = function () {
        this.fatherLoci = this.fatherLoci.map(function (locus) {
            var l = new Locus();
            for (var key in locus) {
                l[key] = locus[key];
            }
            return l;
        });
        this.childLoci = this.childLoci.map(function (locus) {
            var l = new Locus();
            for (var key in locus) {
                l[key] = locus[key];
            }
            return l;
        });
        return this;
    }
    return this;
}

function ConfigMulti() {
    this.priorProbabilities = [];
    this.childLoci = [];
    this.fatherLoci = [];
    this.motherLoci = [];
    this.populationCode = "";

    this.getConfigs = function () {
        var self = this;
        return this.priorProbabilities.map(function (p) {
            var config = new Config();
            config.priorProbability = p;
            config.childLoci = self.childLoci;
            config.fatherLoci = self.fatherLoci;
            config.motherLoci = self.motherLoci;
            config.populationCode = self.populationCode;
            return config;
        });
    }
    return this;
}

var testConfig = {
    "fatherLoci": [
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
    ],
    "motherLoci": [
      {
          "name": "D3S1358",
          "allele1": 17,
          "allele2": 18
      },
      {
          "name": "D7S820",
          "allele1": 8,
          "allele2": 9
      },
      {
          "name": "VWA",
          "allele1": 14,
          "allele2": 15
      },
      {
          "name": "FGA",
          "allele1": 21,
          "allele2": 21
      },
      {
          "name": "D8S1179",
          "allele1": 13,
          "allele2": 15
      },
      {
          "name": "D21S11",
          "allele1": 28,
          "allele2": 29
      },
      {
          "name": "D18S51",
          "allele1": 16,
          "allele2": 17
      },
      {
          "name": "D5S818",
          "allele1": 11,
          "allele2": 14
      }
    ],
    "childLoci": [
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
    ],
    "populationCode": "NIG",
    "priorProbability": 0.5
}

Config.getTestConfig = function () {
    var config = new Config();
    for (var key in testConfig) {
        config[key] = testConfig[key];
    }
    config.init();
    return config;
}
var constants = {
    ERROR_NULL: 'Cannot be null',
    CHILDLOCI_NOT_ZERO: 'Number of ChildLoci should be greater than zero (0)',
    FATHERLOCI_NO_EQUAL_CHILDLOCI_NO: 'Number of Loci in Father should be same as Number of Loci in Child',
    FATHER_EXCLUDED_VERDICT: 'The Father can be excluded as the Biological Father of the Child',
    FATHER_NOT_EXCLUDED_VERDICT: 'The Father can NOT be excluded as the Biological Father of the Child',
    UNSURE_VERDICT: 'Hmm, this is strange. This should not happen ... We are not sure what to say about the biological parentage of the child'
}
function Locus() {
    this.name = "";
    this.allele1 = 0;
    this.allele2 = 0;

    this.isSame = function () {
        return this.allele1 == this.allele2;
    }
    return this;
}

Locus.getSimilarAllele = function (a, b) {
    a = a || new Locus();
    b = b || new Locus();
    if (a.allele1 == b.allele1 || a.allele1 == b.allele2) return a.allele1;
    if (a.allele2 == b.allele1 || a.allele2 == b.allele2) return a.allele2;
    if (a.allele1 == b.allele1 || a.allele2 == b.allele1) return b.allele1;
    if (a.allele1 == b.allele2 || a.allele2 == b.allele2) return b.allele2;
    return 0;
}
function Report() {
    this.combinedPaternityIndex = 0;
    this.probabilityOfPaternity = 0;
    this.priorProbability = 0;
    this.verdict = "";
    return this;
}

function Paternity(cfg) {
    this.config = cfg || new Config();
    this.alleleFrequencies = [];
    this.paternityIndices = [];
    this.combinedPaternityIndex = 1;

    var self = this;

    this.validate = function () {
        if (this.config == null) throw new Error(constants.ERROR_NULL, "config");
        else {
            if (this.config.childLoci == null) throw new Error(constants.ERROR_NULL, "childLoci");
            if (this.config.fatherLoci == null) throw new Error(constants.ERROR_NULL, "fatherLoci");
            if (this.config.childLoci.length == 0) throw new Error(constants.CHILDLOCI_NOT_ZERO);
            if (this.config.fatherLoci.length != this.config.childLoci.length) throw new Error(constants.FATHERLOCI_NO_EQUAL_CHILDLOCI_NO);
        }
        return true;
    }

    this.getCombinedPaternityIndex = function () {
        this.paternityIndices = this.getPaternityIndices();
        this.combinedPaternityIndex = this.paternityIndices.reduce(function (a, b) {
            return a * b;
        }, 1);
        return this.combinedPaternityIndex;
    }

    this.getProbabilityOfPaternity = function () {
        this.getCombinedPaternityIndex();
        return (this.combinedPaternityIndex * this.config.priorProbability) / ((this.combinedPaternityIndex * this.config.priorProbability) + (1 - this.config.priorProbability)) * 100;
    }

    this.getPaternityIndices = function () {
        var paternityIndices = [];
        for (var i = 0; i < self.config.fatherLoci.length; i++) {
            var fatherLocus = self.config.fatherLoci[i] || new Locus();
            var childLocus = self.config.childLoci[i] || new Locus();
            var X = fatherLocus.isSame() ? 1 : 0.5;
            var Y = 0;
            var similarAllele = Locus.getSimilarAllele(fatherLocus, childLocus);
            if (similarAllele > 0) {
                var alleleFrequency = self.alleleFrequencies.filter(function (alleleFreq) {
                    return alleleFreq.locusName == fatherLocus.name && alleleFreq.alleleNo == similarAllele
                })[0];
                if (alleleFrequency != null) {
                    Y = alleleFrequency.frequency;
                }
            }
            console.log("X: " + X + "\t" + "Y: " + Y)
            if (Y == 0) paternityIndices.push(0);
            else paternityIndices.push(X / Y * 100);
        }
        return paternityIndices;
    }

    this.getVerdict = function () {
        self.config.init();
        var report = new Report();
        report.probabilityOfPaternity = this.getProbabilityOfPaternity();
        report.priorProbability = this.config.priorProbability;
        if (report.probabilityOfPaternity == 0) report.verdict = constants.FATHER_EXCLUDED_VERDICT;
        else if (report.probabilityOfPaternity >= 90 && report.probabilityOfPaternity < 100) report.verdict = constants.FATHER_NOT_EXCLUDED_VERDICT;
        else report.verdict = constants.UNSURE_VERDICT;
        return report;
    }
}

Paternity.testPaternity = function () {
    var p = new Paternity();
    p.config = Config.getTestConfig();
    p.alleleFrequencies = AlleleFrequency.getTestAlleleFrequencies();
    return p;
}
function Report() {
    this.combinedPaternityIndex = 0;
    this.probabilityOfPaternity = 0;
    this.priorProbability = 0;
    this.verdict = "";
    return this;
}
babaOmoApp.factory("babaOmoFactory", function ($http) {
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
babaOmoApp.controller("AllelesCtrl", function ($scope, $state, babaOmoFactory) {
    $scope.babaOmoFactory = babaOmoFactory.init($scope);
    var AlleleInfo = function (name) {
        this.name = name || "";
        this.alleles = [];
        var me = this;
        this.init = function () {
            for (var i = 0; i < 8; i++) {
                this.addAllelePair();
            }
            return this;
        }
        this.generateChildAllelePairs = function () {
            if (!$scope.babaOmoFactory.fatherInfo) {
                $state.go("father");
                return;
            }
            $scope.babaOmoFactory.fatherInfo.alleles.slice(0).forEach(function (allele) {
                allele.allele1 = 0;
                allele.allele2 = 0;
                me.alleles.push(allele);
            });
            return this;
        }
        this.generateFatherAllelePairs = function () {
            if (!$scope.babaOmoFactory.info) {
                $state.go("info");
                return;
            }
            this.addAllelePair();
            return this;
        }
        this.addAllelePair = function () {
            if (this.alleles.length == 0 || this.alleles.reduce(function (a, b) { return a && b.validate() }, true)) { //ensure that last allele-pair is valid
                this.alleles.push(new AllelePair());
            }
            else {
            }
            return this;
        }
        this.removeAllelePair = function (index) {
            index = Number(index) || 0;
            if (this.alleles.length > index && index >= 0) {
                $scope.selectedAlleleNames.splice($scope.selectedAlleleNames.indexOf(this.alleles[index].name), 1);
                this.alleles.splice(index, 1);
            }
            return this;
        }
        this.validate = function () {
            return this.alleles.reduce(function (a, b) { return a && b.validate() }, true);
        }
    }
    $scope.AlleleInfo = AlleleInfo;
    $scope.AlleleInfo.create = function (name) {
        return new AlleleInfo(name);
    }
    var AllelePair = function () {
        this.name = "Allele";
        this.allele1 = 0;
        this.allele2 = 0;
        this.validate = function () {
            doc.remError("[data-allele-pair-valid] input,select");
            this.valid = true;
            var arr = $scope.alleleInfo.alleles.map(function (a) { return a.name });
            if (arr.distinct().length < arr.length) {
                var filtered = arr.filter(function (i) { return arr.count(function (x) { return x == i; }) > 1; }).distinct();
                //console.log(filtered);
                setTimeout(function () { //give time for DOM update
                    filtered.forEach(function (name) {
                        doc.setError("select[data-allele-pair-name='" + name + "']", "duplicate allele names");
                    });
                }, 300);
                this.valid = false;
            }
            else if (!String.isNullOrEmpty(this.name) && this.name != 'Allele' && this.allele1 > 0 && this.allele2 > 0) this.valid = true;
            else {
                if (String.isNullOrEmpty(this.name) || this.name == 'Allele') doc.setError("[data-allele-pair-valid='false'] [ng-model='allelePair.name']", "choose a valid allele name");
                else if (!this.allele1) doc.setError("[data-allele-pair-valid='false'] [ng-model='allelePair.allele1']", "choose a value for allele1");
                else if (!this.allele2) doc.setError("[data-allele-pair-valid='false'] [ng-model='allelePair.allele2']", "choose a value for allele2");
                this.valid = false;
            }
            return this.valid;
        }
    }
    $scope.selectedAlleleNames = [];
    $scope.getAlleles().then(function (response) {
        console.log("alleles", response.data);
        response.data.splice(0, 0, "Allele");
        $scope.alleleNames = response.data;
        $scope.babaOmoFactory.alleleNames = response.data;
    });
    $scope.proceedToChild = function () {
        if ($scope.alleleInfo.validate()) {
            $scope.babaOmoFactory[$scope.alleleInfo.name + "Info"] = $scope.alleleInfo;
            $state.go("child");
        }
    }
    $scope.proceedToResult = function () {
        if ($scope.alleleInfo.validate()) {
            $scope.babaOmoFactory[$scope.alleleInfo.name + "Info"] = $scope.alleleInfo;
            $state.go("result");
        }
    }
});
babaOmoApp.controller("InfoCtrl", function ($scope, $state, babaOmoFactory) {
    $scope.babaOmoFactory = babaOmoFactory.init($scope);
    $scope.countries = [];
    $scope.getCountries().then(function (response) {
        console.log("countries", response.data);
        $scope.countries = response.data;
        $scope.countries = $scope.countries.sort(function (a, b) {
            return a.name > b.name;
        });
        $scope.countries.splice(0, 0, { name: "Choose a Country" })
    });

    var Info = function () {
        this.name = "";
        this.email = "";
        this.gender = "male";
        this.dob = "01/01/2002";
        this.country = "NIG";
        var me = this;
        this.validate = function () {
            doc.remError("#inputName,#inputEmail,#inputCountry,#inputGender");
            if (String.isNullOrEmpty(me.name)) doc.setError("#inputName", "Invalid Name");
            //else if (String.isNullOrEmpty(me.email) || !/(\w+(\d*)(\w*))+\@(\w+(\d*)(\w*))+\.(\w+(\d*)(\w*))+/.test(me.email)) doc.setError("#inputEmail", "Invalid Email Address");
            else if (String.isNullOrEmpty(me.country)) doc.setError("#inputCountry", "Invalid Country");
            else if (String.isNullOrEmpty(me.gender)) doc.setError("#inputGender", "Invalid Gender");
            else {
                me.submit();
                $scope.babaOmoFactory.info = me;
            }
        }
        this.submit = function () {
            $scope.babaOmoFactory.info = me;
            $state.go("father");
        }
    }
    $scope.info = new Info();
});
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
$('.form-control').on('focus blur', function (e) {
    $(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
}).trigger('blur');

$(document).ready(function () {

    //$('.remove-allel:first').hide();
    
    //$('.add-dna').click(function () {
    //    //we select the box clone it and insert it after the box
    //    $('.box:first').clone().insertAfter(".box:last");
    //    $(".remove-allel:not('.remove-allel:first')").show();
    //});

    //$(document).on("click", ".remove-allel", function () {
    //    $(this).closest(".box").remove();
    //});
});

String.isNullOrEmpty = function (str) {
    return str == null || str == '';
}

var doc = {
    setError: function (selector, msg) {
        $(selector).each(function () {
            $(this).css("border", "1px solid red");
            $(this).notify(msg, "error");
        });
    },
    remError: function (selector) {
        $(selector).each(function () {
            $(this).css("border", "");
            $(this).trigger('notify-hide');
        });
    }
}
Array.prototype.paginate = function (length) {
    var arr = this;
    length = (length || 1);
    return arr.reduce(function (a, b) {
        if (!a[a.length - 1] || a[a.length - 1].length == length) a.push([]);
        a[a.length - 1].push(b);
        return a;
    }, []);
}

Array.prototype.flatten = function () {
    var arr = this;
    return arr.reduce(function (a, b) {
        return a.concat(b);
    }, []);
}

Array.prototype.distinct = function (fn) {
    fn = fn || function (a) { return a; }
    var arr = this;
    return arr.reduce(function (a, b) {
        return a.indexOf(fn(b)) < 0 ? a.concat(b) : a;
    }, []);
}

if (!Array.prototype.find) {
    Array.prototype.find = function (fn) {
        fn = fn || function (a) { return a; }
        var arr = this;
        for (var i = 0; i < arr.length; i++) {
            if (fn(arr[i])) return arr[i];
        }
        return null;
    }
}

if (!Array.prototype.findIndex) {
    Array.prototype.findIndex = function (fn) {
        fn = fn || function (a) { return a; }
        var arr = this;
        for (var i = 0; i < arr.length; i++) {
            if (fn(arr[i])) return i;
        }
        return -1;
    }
}

Array.prototype.count = function (fn) {
    var arr = this;
    fn = fn || function (a) { return a; }
    return arr.filter(fn).length;
}