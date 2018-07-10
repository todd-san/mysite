angular.module('sewSpecialApp')
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
                    'carouselView': {
                        templateUrl: 'template/carousel-view.html',
                        controller: "carouselViewController",
                        controllerAs: 'carouselCntrl'
                    },
                    'threadView': {
                        templateUrl: 'template/thread-view.html',
                        controller: 'threadViewController',
                        controllerAs: 'threadCntrl'
                    }
                    // 'categoryView':{
                    //     templateUrl: 'template/category-view.html',
                    //     controller: "categoryViewController",
                    //     controllerAs: 'categoryCntrl'
                    // },
                    // 'paginateView':{
                    //     templateUrl: 'template/paginate-view.html',
                    //     controller: "paginateViewController",
                    //     controllerAs: 'paginateCntrl'
                    // }
                },
                resolve: {
                    // posts: ['Posts', function(Posts){
                    //     return Posts.query().$promise
                    // }]
                }
            })
    //     .state('thread',{
    //             url: '/?{page}',
    //             views:{
    //                 'navView':{
    //                     templateUrl: 'template/nav-view.html',
    //                     controller: 'navViewController',
    //                     controllerAs: 'navCntrl'
    //                 },
    //                 // 'headerView':{
    //                 //     templateUrl: 'template/header-view.html',
    //                 //     controller: 'headerViewController',
    //                 //     controllerAs: 'pageTitleCntrl'
    //                 // },
    //                 'threadView': {
    //                     templateUrl: 'template/thread-view.html',
    //                     controller: "threadViewController",
    //                     controllerAs: 'threadCntrl'
    //                 },
    //                 'searchView': {
    //                     templateUrl: 'template/search-view.html',
    //                     controller: 'searchViewController',
    //                     controllerAs: 'searchCntrl'
    //                 },
    //                 'categoryView':{
    //                     templateUrl: 'template/category-view.html',
    //                     controller: "categoryViewController",
    //                     controllerAs: 'categoryCntrl'
    //                 },
    //                 'paginateView':{
    //                     templateUrl: 'template/paginate-view.html',
    //                     controller: "paginateViewController",
    //                     controllerAs: 'paginateCntrl'
    //                 }
    //             },
    //             resolve: {
    //                 posts: ['$transition$', 'Posts', function($transition$, Posts){
    //                     return Posts.query({page:$transition$.params().page}).$promise
    //                 }]
    //             }
    //         })
    //     .state('post',{
    //             url: '/post/{id}',
    //             views:{
    //                 'navView':{
    //                     templateUrl: 'template/nav-view.html',
    //                     controller: 'navViewController',
    //                     controllerAs: 'navCntrl'
    //                 },
    //                 'postView':{
    //                     templateUrl: 'template/post-view.html',
    //                     controller: "postViewController",
    //                     controllerAs: 'postCntrl'
    //                 }
    //             },
    //             resolve: {
    //                 post: ['$transition$', 'Post', function($transition$, Post){
    //                     return Post.query({id:$transition$.params().id}).$promise
    //                 }]
    //             }
    //         })
    //     .state('edit-post',{
    //             url: '/edit-post/{id}',
    //             views:{
    //                 'navView':{
    //                     templateUrl: 'template/nav-view.html',
    //                     controller: 'navViewController',
    //                     controllerAs: 'navCntrl'
    //                 },
    //                 'postView':{
    //                     templateUrl: 'template/edit-post-view.html',
    //                     controller: "postViewController",
    //                     controllerAs: 'postCntrl'
    //                 }
    //             },
    //             resolve: {
    //                 post: ['$transition$', 'Post', function($transition$, Post){
    //                     return Post.query({id:$transition$.params().id}).$promise
    //                 }]
    //             }
    // })
    //     .state('about',{
    //             url: '/about/',
    //             views:{
    //                 'navView':{
    //                     templateUrl: 'template/nav-view.html',
    //                     controller: 'navViewController',
    //                     controllerAs: 'navCntrl'
    //                 },
    //                 'aboutView':{
    //                     templateUrl: 'template/about-view.html',
    //                     controller: "aboutViewController",
    //                     controllerAs: 'aboutCntrl'
    //                 }
    //             },
    //             resolve: {
    //                 about: ['$transition$', 'About', function($transition$, About){
    //                     return About.query().$promise
    //                 }]
    //             }
    //     });

    }]);