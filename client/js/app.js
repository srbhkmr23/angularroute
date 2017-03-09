var myapp = angular.module('myapp', ['ui.router']);

myapp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: '../views/home.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            templateUrl: '../views/about.html'      
        })

        .state('contact', {
           url: '/contact',
            templateUrl: '../views/contact.html'      
        });
        
});