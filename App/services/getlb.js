app.factory('getlb', ['getAjax', function (getAjax) {
    return {
        getJson: function () {
            return getAjax.getajax('http://localhost:8008/carousel');
        }
    }
}]);