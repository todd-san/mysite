angular.module('blogApp')
    .controller('aboutViewController',
        ['$log', 'about', function($log, about){
            $log.info('Called into aboutViewController');
            var self = this;
            self.about = about[0];
            console.log('about: ', self.about);
    }]);