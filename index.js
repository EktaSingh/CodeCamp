var app = angular.module('myApp', []);
var text = "",
  text1 = "",
  text2 = "";
app.controller('myCtrl', function($scope) {
  var classname = $("button");
  var tapped = function() {
    debugger;
    if ( this.textContent!=="CE" && this.textContent !== "AC" && this.textContent !== "=" &&
       this.textContent !== "Ans") {
      text = text.concat(this.textContent);
      $scope.cal = text;
      $scope.$apply();
    } else {
      var val = this.textContent;
      switch (val) {
        case "AC":

          text = "";
          $scope.cal = text;
          $scope.$apply();
          break;
          
        case "CE":
          text = text.substring(0, text.length - 1);
          $scope.cal = text;
          $scope.$apply();
          break;
       
        case "Ans":

          text= (eval(text)).toString();
          $scope.cal =  text;
          $scope.$apply();
          break;
        case "=":
     
          text= (eval(text)).toString();
          $scope.cal =  text;
          $scope.$apply();
          break;
      }
    }

  };
  for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', tapped, false);
  }
});