
app.controller('l-w-ctrl', function($scope, locationHandler) {
    $scope.longtitude;
    $scope.latitude;
    $scope.Wcount=0;
    $scope.Lcount=0;
  $scope.loadResult= function(){
      locationHandler.getlocation( $scope.latitude, $scope.longtitude,onsucsses,onerror)
    
      
   function onsucsses(response){
      console.log(response)
   }
        
    
  
  
});