app.directive('tab', function () {
    return {
        scope: true,
        restrict: 'EA',
        templateUrl:'App/View/tab/tab.html',
        link: function (scope, ele, attr) {
            scope.change =  function ($index) {
                var ind = $index;
                var title = document.getElementsByClassName('title')[0].getElementsByTagName('span');
                var cont = document.getElementsByClassName('cont')[0];
                var spans = cont.getElementsByTagName('div');
                [...title].forEach(function (item, index, arr) {
                    item.style="background:#ccc;color:#fff";
                });
                [...spans].forEach(function (item, index, arr) {
                    if (index === ind) {
                        item.style = "display:block";
                        title[ind].style="background:#fff;color:#ccc";
                    } else {
                        item.style = "display:none";
                    }
                });
            }
        }
    }
});