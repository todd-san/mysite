blogApp2
    // .controller('navViewController',
    //     ['$scope', '$log', function($scope, $log){
    //         $log.info('Called into NavController');
    //         var self = this;
    //     }]
    // )
    .controller('threadViewController',
        ['$scope','posts', function($scope, posts){
            // $log.info('Called into threadViewController');
            var self = this;
            self.posts = posts;
            console.log('here! w/ posts: ', posts);
    }]);
    // .controller('postViewController',
    //     ['$log', function($log){
    //         $log.info('Called into postViewController');
    //         var self = this;
    //
    // }])
    // .controller('searchViewController',
    //     ['$log', function($log){
    //         $log.info('Called into searchViewController');
    //         var self = this;
    //
    // }])
    // .controller('categoryViewController',
    //     ['$log', function($log){
    //         $log.info('Called into categoryViewController');
    //         var self = this;
    //
    // }])
    // .controller('paginateViewController',
    //     ['$log', function($log){
    //         $log.info('Called into paginateViewController');
    //         var self = this;
    //
    // }])
    // .controller('footerViewController',
    //     ['$log', function($log){
    //         $log.info('Called into footerViewController');
    //         var self = this;
    //
    // }]);