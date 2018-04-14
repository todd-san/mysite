angular.module('blogApp')
    .config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

        // Fall back to default route on failed state change.
        $urlRouterProvider.otherwise('/');

        // View States.
        $stateProvider
        .state('default', {
                url:'/',
                views:{
                    'navView':{
                        templateUrl: 'template/nav-view.html',
                        controller: 'navViewController',
                        controllerAs: 'navCntrl'
                    },
                    'headerView':{
                        templateUrl: 'template/header-view.html',
                        controller: 'headerViewController',
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
                    'paginateView':{
                        templateUrl: 'template/paginate-view.html',
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
                    'headerView':{
                        templateUrl: 'template/header-view.html',
                        controller: 'headerViewController',
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
                        templateUrl: 'template/paginate-view.html',
                        controller: "paginateViewController",
                        controllerAs: 'paginationCntrl'
                    }
                },
                resolve: {
                    posts: ['$transition$', 'Posts', function($transition$, Posts){
                        return Posts.query({page:$transition$.params().page}).$promise
                    }]
                }
            })
        .state('post',{
                url: '/post/:{id}',
                views:{
                    'navView':{
                        templateUrl: 'template/nav-view.html',
                        controller: 'navViewController',
                        controllerAs: 'navCntrl'
                    },
                    'headerView':{
                        templateUrl: 'template/header-view.html',
                        controller: 'headerViewController',
                        controllerAs: 'headerCntrl'
                    },
                    'postView':{
                        templateUrl: 'template/post-view.html',
                        controller: "postViewController",
                        controllerAs: 'postCntrl'
                    }
                },
                resolve: {
                    post: ['$transition$', 'Post', function($transition$, Post){
                        return Post.query({id:$transition$.params().id}).$promise
                    }]
                }
            });

    }]);