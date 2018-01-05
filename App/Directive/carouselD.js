app.directive('lb', function ($interval) {
    return {
        scope: true,
        restrict: 'EA',
        templateUrl:'App/View/lb/lb.html',
        link: function (scope, ele, attr) {
            var box=document.getElementById("box");
            var ul=box.getElementsByClassName("images")[0];
            var ulli=ul.getElementsByTagName("li");
            var ol=box.getElementsByClassName("button")[0];
            var olli=ol.getElementsByTagName("li");
            var left=box.getElementsByClassName("left")[0];
            var right=box.getElementsByClassName("right")[0];
            var ind=0;
            var timer=null;
            function fun(){
               for(var i=0;i<olli.length;i++){
                   olli[i].className="";
                }
                olli[ind].classList.add("cur");
                ul.style.marginLeft=-ind*1000+"px";
            }
            for(var i=0;i<olli.length;i++){
               olli[i].index=i;
               olli[i].onclick=function(){
                   ind=this.index;
                   fun();
               }
            }
            scope.prev = function(){
               ind--;
               if(ind<0){
                   ind=olli.length-1;
               }
               console.log(ind)
               fun();
            }
            scope.next = function(){
               ind++;
               if(ind>olli.length - 1){
                   ind=0;
               }
               fun();
            }
            //开启时自动播
            timer=$interval(function(){
                scope.next();
           },1000);
            scope.mouseout=function(){
               timer=$interval(function(){
                    scope.next();
               },1000);
            }
            scope.mouseover=function(){
                $interval.cancel(timer);
            }
        }
    }
});