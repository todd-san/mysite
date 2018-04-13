'use strict';
angular.module('blogApp')
    .run(['$rootScope', '$anchorScroll', '$document',
        function($rootScope, $anchorScroll, $document){
        $rootScope.$on('$stateChangeSuccess', function() {
            $document[0].body.scrollTop = $document[0].documentElement.scrollTop = 0;
        });
    }]);