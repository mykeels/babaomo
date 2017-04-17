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