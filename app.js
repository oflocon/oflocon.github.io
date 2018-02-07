
Data = function(task, date) {
      this.task =task;
      this.date=date;
    
}

var json;
var product ;
//console.log(localStorage.getItem('tes'));
//document.getElementById("prev").innerHTML = localStorage.getItem('tes');

if(localStorage.getItem('testt')!=null)product = JSON.parse(localStorage.getItem('testt'));
else product =[];
  
var app = angular.module("TO DO LIST", []); 
app.controller("myCtrl",function($scope) {
    

    
    $scope.addItem = function () {        
        $scope.products=product;
        $scope.errortext = "";
        if (!$scope.addMe){return;} 
        if($scope.addMe=="prev")
        {
            return;
        } 
        
        if ($scope.products.indexOf($scope.addMe) == -1) 
        {
       	$scope.date = new Date();
            
            $scope.myTime.setFullYear($scope.date.getFullYear());
            $scope.myTime.setMonth($scope.date.getMonth());
            $scope.myTime.setDate($scope.date.getDate());
           
            $scope.products.push(new Data($scope.addMe,$scope.myTime));
            product.push(new Data($scope.addMe,$scope.myTime));
            json=JSON.stringify(product);
              

            localStorage.setItem('testt',json);

            var eta_ms = $scope.myTime - Date.now();
 	      var timeout = setTimeout(function() {
                var audio = new Audio('file.mp3');
                audio.play();
                alert("reminder");}, eta_ms); 
        } 
        else 
        {
            $scope.errortext = "The item is already in your to do list.";
        }
       
    }

    $scope.removeItem = function (x) {
        $scope.errortext = "";    
        $scope.products.splice(x, 1);

        json=JSON.stringify(product);

        localStorage.setItem('testt',json);
    }
   
    
    
    
});

  
  
