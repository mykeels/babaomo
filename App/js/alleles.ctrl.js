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
                var childAllele = new AllelePair();
                //allele.allele1 = 0;
                //allele.allele2 = 0;
                me.alleles.push(childAllele);
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
        this.loadTests = function () {
            if (this.name == "father") {
                this.alleles = sampleFatherLoci;
            }
            else {
                this.alleles = sampleChildLoci;
            }
            this.alleles.forEach(function (allele) {
                allele.validate = function () { return (new AllelePair()).validate.call(allele) }
            })
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