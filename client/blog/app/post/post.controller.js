'use strict';
angular.module('blogApp')
    .controller('postViewController',
        ['$state','$stateParams','$log', 'post',
            function($state, $stateParams, $log, post){

        $log.info('Called into postViewController');
        var self = this;
        self.post = post.data;

        console.log(self.post);
    }
]);