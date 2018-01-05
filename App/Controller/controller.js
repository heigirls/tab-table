var user = function ($scope, getInfo) {
    getInfo.getJson().then(function (results) {
        $scope.datas = results;
    });
}
user.$inject = ['$scope', 'getInfo'];
app.controller('tabController', user);