var babaOmoApp = angular.module("BabaOmoApp", ["ui.router"]);

babaOmoApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/info');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'partials/splash.html'
        })
        .state('info', {
            url: '/info',
            templateUrl: 'partials/info.html',
            controller: 'InfoCtrl'
        })
        .state('child', {
            url: '/child',
            templateUrl: 'partials/child.html',
            controller: 'AllelesCtrl'
        })
        .state('father', {
            url: '/father',
            templateUrl: 'partials/father.html',
            controller: 'AllelesCtrl'
        })
        .state('result', {
            url: '/result',
            templateUrl: 'partials/result.html',
            controller: 'ResultCtrl'
        });
});

function rootUrl(url) {
    return "/" + url;
}

function webApiUrl(url) {
    return "/" + url;
}

function errorhandler(err, obj) {
    console.error(err, obj);
}