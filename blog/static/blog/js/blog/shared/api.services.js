'use strict';
// common services to get information about KASS from the server.
blogApp2
.factory('Posts', [
    '$resource', function($resource) {
        return $resource('api/posts/',
            {'query': {method:'GET', isArray:true}})
    }]
);