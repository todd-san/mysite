angular.module('blogApp')
    .controller('projectViewController',
        ['$log', '$state', 'projects', function($log, $state, projects){
            $log.info('Called into projectsViewController');
            var self = this;
            angular.forEach(projects, function(project){
                project.image = project.image.replace('/api/projects', '');
                return project
            });

            self.projects = projects;
            console.log('state name: ', $state.current.name);
            console.log('projects: ', projects);

    }]);