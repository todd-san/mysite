'use strict';
angular.module('blogApp')
    .controller('postViewController',
        ['$state','$stateParams','$log',
            function($state, $stateParams, $log){

        $log.info('Called into postViewController');
        var self = this;

    }
]);