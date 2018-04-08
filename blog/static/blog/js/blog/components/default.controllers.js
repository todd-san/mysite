blogApp2
    .controller('pageTitleViewController',
        ['$scope', '$log', function($scope, $log){
            $log.info('Called into pageTitleViewController');
            var self = this;
        }]
    )
    .controller('threadViewController',
        ['$scope','posts', function($scope, posts){
            // $log.info('Called into threadViewController');
            var self = this;
            self.posts = posts.data;
            self.headers = posts.headers;
            console.log('here! w/ posts: ', self.posts);
    }])
    // .controller('postViewController',
    //     ['$log', function($log){
    //         $log.info('Called into postViewController');
    //         var self = this;
    //
    // }])
    .controller('searchViewController',
        ['$log', 'posts', function($log, posts){
            $log.info('Called into searchViewController');
            var self = this;

    }])
    .controller('categoryViewController',
        ['$log', 'posts', function($log, posts){
            $log.info('Called into categoryViewController');
            var self = this;

    }])
    .controller('paginationViewController',
        ['$state','$stateParams','$log', 'posts',
            function($state, $stateParams, $log, posts){
                $log.info('Called into paginationViewController');
                var self = this;

                self.headers = posts.headers;
                self.newerPosts = {};
                self.olderPosts = {};

                self.setInitialPagination = function(){

                    var postsPerPage = parseInt(self.headers['x-per-page']);
                    var postsTotal = parseInt(self.headers['x-total']);
                    var pageCurrent = parseInt(self.headers['x-page']);
                    var pageTotal = parseInt(self.headers['x-total-pages']);
                    console.log('posts per page: ', postsPerPage);
                    console.log('   posts Total: ', postsTotal);
                    console.log('  page Current: ', pageCurrent);
                    console.log('    page Total: ', pageTotal);
                    console.log('stateParams: ', $stateParams);

                    if(pageTotal > pageCurrent){
                        self.olderPosts.class='page-item';

                    } else {
                        self.olderPosts.class='page-item disabled';
                    }
                };
                function changeToNewerPosts(headers){

                }
                self.setInitialPagination();
            }
        ]
    );
    // .controller('footerViewController',
    //     ['$log', function($log){
    //         $log.info('Called into footerViewController');
    //         var self = this;
    //
    // }]);