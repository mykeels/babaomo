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
        this.country = "";
        this.gender = "male";
        this.dob = "01/01/2002";
        var me = this;
        this.validate = function () {
            doc.remError("#inputName,#inputEmail,#inputCountry,#inputGender");
            if (String.isNullOrEmpty(me.name)) doc.setError("#inputName", "Invalid Name");
            else if (String.isNullOrEmpty(me.email) || !/(\w+(\d*)(\w*))+\@(\w+(\d*)(\w*))+\.(\w+(\d*)(\w*))+/.test(me.email)) doc.setError("#inputEmail", "Invalid Email Address");
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
    var data = {
        priorProbabilities: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9],
        childLoci: ($scope.babaOmoFactory.childInfo || {}).alleles || sampleChildLoci,
        fatherLoci: ($scope.babaOmoFactory.fatherInfo || {}).alleles || sampleFatherLoci,
        populationCode: ($scope.babaOmoFactory.info || {}).country || "NIG"
    }

    $scope.getVerdicts = function () {
        console.log("request", data);
        return $http.post(webApiUrl('api/paternity/getVerdicts'), data).success(function (response) {
            $scope.verdicts = (response || {}).Result;
            console.log("get-verdict", response);
        }).error(function (err, obj) {
            console.error(err, obj);
        });
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