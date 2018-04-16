'use strict';
angular.module('blogApp')
    .controller('postViewController',
        ['$state','$stateParams','$log', 'post',
            function($state, $stateParams, $log, post){

        $log.info('Called into postViewController');
        var self = this;
        self.post = post;

        console.log(self.post);

        self.goToEditPost = function(){
            $state.go(
                'edit-post',
                {id: self.post.id.toString()},
                {reload: true}
            )
        };

        self.cancelEdit = function(){
            $state.go(
                'post',
                {id: self.post.id.toString()},
                {reload: true}
            )
        };

        self.updatePost = function(){
            console.log('updating post with: ', self.post);
            self.post.$save();

            $state.go(
                'post',
                {id: self.post.id.toString()},
                {reload: true}
            );

        }
    }
]);