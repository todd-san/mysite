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
                'pageTitleView':{
                    templateUrl: 'template/pageTitle-view.html',
                    controller: 'pageTitleViewController',
                    controllerAs: 'pageTitleCntrl'
                },
                'threadView': {
                    templateUrl: 'template/thread-view.html',
                    controller: "threadViewController",
                    controllerAs: 'threadCntrl'
                },
                'searchView': {
                    templateUrl: 'template/search-view.html',
                    controller: 'searchViewController',
                    controllerAs: 'searchCntrl'
                },
                'categoryView':{
                    templateUrl: 'template/category-view.html',
                    controller: "categoryViewController",
                    controllerAs: 'categoryCntrl'
                },
                'paginationView':{
                    templateUrl: 'template/pagination-view.html',
                    controller: "paginationViewController",
                    controllerAs: 'paginationCntrl'
                }
            },
            resolve: {
                posts: ['Posts', function(Posts){
                    return Posts.query().$promise
                }]
            }
        })
        .state('thread',{
            url: '/?{page}',
            views:{
                'pageTitleView':{
                    templateUrl: 'template/pageTitle-view.html',
                    controller: 'pageTitleViewController',
                    controllerAs: 'pageTitleCntrl'
                },
                'threadView': {
                    templateUrl: 'template/thread-view.html',
                    controller: "threadViewController",
                    controllerAs: 'threadCntrl'
                },
                'searchView': {
                    templateUrl: 'template/search-view.html',
                    controller: 'searchViewController',
                    controllerAs: 'searchCntrl'
                },
                'categoryView':{
                    templateUrl: 'template/category-view.html',
                    controller: "categoryViewController",
                    controllerAs: 'categoryCntrl'
                },
                'paginationView':{
                    templateUrl: 'template/pagination-view.html',
                    controller: "paginationViewController",
                    controllerAs: 'paginationCntrl'
                }
            },
            resolve: {
                posts: ['$transition$', 'Posts', function($transition$, Posts){
                    return Posts.query({page:$transition$.params().page}).$promise
                }]
            }
        });
        $urlRouterProvider.otherwise('/');
    }])
    .run(['$rootScope', '$anchorScroll', '$document', function($rootScope, $anchorScroll, $document){
        $rootScope.$on('$stateChangeSuccess', function() {
            $document[0].body.scrollTop = $document[0].documentElement.scrollTop = 0;
        });
    }]);
