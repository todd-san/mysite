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
            };
            self.goToProjects = function(){
                console.log('go to projects!');
                $state.go(
                    'projects',
                    {reload: true}
                );
            };


            function changeActiveNavLink(){
                if ($state.current.name==='about'){
                    var obj = document.getElementById('nav_about');
                    obj.class='nav-item active';
                }
            }

            changeActiveNavLink();
    }]);
