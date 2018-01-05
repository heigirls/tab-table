app.factory('getInfo', ['getAjax', function (getAjax) {
    return {
        getJson: function () {
            return getAjax.getajax('http://localhost:8008/index');
        }
    }
}]);