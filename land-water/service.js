app.service("locationHandler",function($http){
         let debogMode=true;
      this.getlocation = function(lang,long,onSucsses,onError) {
          if(debogMode){
             setTimeout(function(){
                onSucsses(
                    {
                     data: {
                          lat: lang,
                          lon: long,
                          water: true
                      }
                    }
                 )
             },1*1000)

          }
          else{
                $http({
                    method :'GET',
                    url: 'https://api.onwater.io/api/v1/results/'+lang+','+long,
                    params: {
                        access_token: '4zeVt4uqSazyxgGoR-ss'
            
                    }  
                    
                }).then(onSucsses,onError)
             }
        }
       
    });
    

