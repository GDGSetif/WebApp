var app = angular.module('gdgapp',['ngRoute','ngAnimate']).
                config(function($routeProvider,$locationProvider){
                    $locationProvider.html5Mode(true)
                    $routeProvider
                        .when('/team',{
                            templateUrl:"views/team.html",
                            controller:"teamCtrl"
                        })
						.when('/contact',{
                            templateUrl:"views/contact.html"
                        })
						.when('/about',{
                            templateUrl:"views/about.html"
                        })
						.when('/events',{
                            templateUrl:"views/events.html"
                        })
                        .otherwise({
                            redirectTo:"/",
                            templateUrl:"views/home.html",
                            controller:"homeCtrl"
                        })
                });
            

app.controller('teamCtrl',function($scope,$http){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    var spd = $http.get('data/team.json');
   
    fetch('data/team.json')
    .then(res=>res.json())
    .then(data => {
        $scope.speakersData = data;
    })

})

app.controller('homeCtrl',function($scope,$http){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    var cv = $http.get('data/home.json');

    fetch('data/home.json')
    .then(res=>res.json())
    .then(data => {
        $scope.homeJson = data;
    })

})


app.controller('footerCtrl',function($scope){
    fetch('data/footer.json')
    .then(res=>res.json())
    .then(data => {
        $scope.footerData = data;
    })
})