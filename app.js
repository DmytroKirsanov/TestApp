(function(){
    "use strict"
    angular.module("occasionApp", ["ngMaterial"])
        .controller("pageController", ["$scope", "$http", function($scope, $http){

            $scope.resultObject;
            $scope.occasionType;
            $scope.typeIndex;
            $scope.errorMessage;

            getObject();

            function getObject(){
                $http.get("http://prod.gent.gift:3000/occasion/getTypes", {
                    params : {
                        languageId : 1
                    }
                }).then(function(response){
                    $scope.resultObject = response.data;
                }, function(response){
                    $scope.errorMessage = "Response status: " + response.status
                        + " " + response.statusText;
                });
            };

            $scope.getTypeIndex = function(value){
                $scope.typeIndex = value;
            };
        }])
})();