angular.module('blogApp')
    .controller('categoryViewController',
        ['$log', 'posts', function($log, posts){
            $log.info('Called into categoryViewController');
            var self = this;

    }]);
