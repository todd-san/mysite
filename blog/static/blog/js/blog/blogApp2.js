// -----------------------------------------------------------------------------------------------------------------
// APP DEFINITION
// -----------------------------------------------------------------------------------------------------------------
var blogApp2 = angular.module(
    'blogApp2',
    ['ngResource', 'ui.router', 'ngSanitize']);

// -----------------------------------------------------------------------------------------------------------------
// CONFIGURATIONS
// -----------------------------------------------------------------------------------------------------------------
blogApp2.config(['$interpolateProvider', '$stateProvider', '$resourceProvider',
    '$urlRouterProvider', '$httpProvider',
    function($interpolateProvider, $stateProvider, $resourceProvider,
             $urlRouterProvider, $httpProvider) {

        // add csrf tokens to all communications
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = "X-CSRFToken";

        // Change angular's default template interpolation symbol since it conflicts with Django.
        $interpolateProvider.startSymbol('<$');
        $interpolateProvider.endSymbol('$>');

        // Fix the trailing slashes issue
        $resourceProvider.defaults.stripTrailingSlashes = false;

        // Define view states
        $stateProvider
        .state('default', {
            url:'/',
            views:{
                'threadView': {
                    templateUrl: 'template/thread-view.html',
                    controller: "threadViewController",
                    controllerAs: 'threadCntrl'
                }
            },
            resolve: {
                posts: ['Posts', function(Posts){
                    return Posts.query().$promise
                }]
            }
        });
        $urlRouterProvider.otherwise('/');
    }]);
