app.factory('getAjax', function ($q, $http) {
    return {
        getajax: function (url, type) {
            var def = $q.defer();
            $http({
                url: url,
                method: 'post'||type
            }).success(function (result) {
                def.resolve(result);
            }).error(function (error) {
                def.reject(error);
            });
            return def.promise;
        }
    }
});