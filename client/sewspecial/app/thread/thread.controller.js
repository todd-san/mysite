angular.module('sewSpecialApp')
    .controller('threadViewController',
        ['$state','posts',
            function($state, posts){
        $log.info('Called into threadViewController');
        var self = this;
        self.posts = posts.data;
        self.headers = posts.headers;
        console.log('here! w/ posts: ', self.posts);


        self.goToPost = function(post){
            console.log('clicked "Read More", with post: ', post);
            $state.go(
                'post',
                {id: (post.id).toString()}
                // {reload: true}
            );
        }
}]);