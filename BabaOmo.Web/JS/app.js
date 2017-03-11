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