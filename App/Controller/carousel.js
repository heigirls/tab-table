app.controller('carouselController', ['$scope', 'getlb', function ($scope, getlb) {
    getlb.getJson().then(function (results) {
        $scope.result = results;
    });
}]);