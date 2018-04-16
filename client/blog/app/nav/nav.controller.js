angular.module('blogApp')
    .controller('navViewController',
        ['$log', '$state', function($log, $state){
            $log.info('Called into categoryViewController');
            var self = this;


            self.goToAboutMe = function(){
                console.log('go to about me!');
                $state.go(
                    'about',
                    {reload: true}
                );
            }

    }]);
