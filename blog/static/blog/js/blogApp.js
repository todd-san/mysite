var blogApp = angular.module('blogApp', ['ngResource']);

// -----------------------------------------------------------------------------------------------------------------
// CONFIGURATIONS
// -----------------------------------------------------------------------------------------------------------------
blogApp.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('<$');
    $interpolateProvider.endSymbol('$>');
});

blogApp.config(function($resourceProvider){
   $resourceProvider.defaults.stripTrailingSlashes = false;
});

blogApp.config(function($locationProvider){
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        rewriteLinks: false
    });
});

// ------------------------------------------------------------------------------------------------------------------
// CONTROLLERS
// ------------------------------------------------------------------------------------------------------------------
blogApp.controller('threadViewController', function($scope){

   console.log('here!')
});