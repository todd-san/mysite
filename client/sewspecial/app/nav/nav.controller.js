angular.module('sewSpecialApp')
    .controller('navViewController',
        ['$log', '$state', function($log, $state){
            $log.info('Called into navViewController');
            var self = this;


            self.goToAboutMe = function(){
                console.log('go to about me!');
                $state.go(
                    'about',
                    {reload: true}
                );
            }

    }]);
