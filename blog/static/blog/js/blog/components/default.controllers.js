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

                    self.postsPerPage = parseInt(self.headers['x-per-page']);
                    self.postsTotal = parseInt(self.headers['x-total']);
                    self.pageCurrent = parseInt(self.headers['x-page']);
                    self.pageTotal = parseInt(self.headers['x-total-pages']);
                    console.log('posts per page: ', self.postsPerPage);
                    console.log('   posts Total: ', self.postsTotal);
                    console.log('  page Current: ', self.pageCurrent);
                    console.log('    page Total: ', self.pageTotal);
                    console.log('stateParams: ', $stateParams);

                    if(self.pageTotal > self.pageCurrent){
                        self.olderPosts.class='page-item';

                    } else {
                        self.olderPosts.class='page-item disabled';
                    }

                    if(self.pageTotal > 1 && self.pageTotal === self.pageCurrent){
                        self.newerPosts.class='page-item';

                    } else {
                        self.newerPosts.class = 'page-item disabled';
                    }
                };

                self.forwardOnePage = function(){
                    $state.go(
                        'thread',
                        {page: (self.pageCurrent - 1).toString()}
                        // {reload: true}
                    );
                };

                self.backOnePage = function(){
                    console.log('@backOnePage');
                    $state.go(
                        'thread',
                        {page: (self.pageCurrent + 1).toString()}
                        // {reload: true}
                    );
                };
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