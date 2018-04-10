'use strict';
// common services to get information about KASS from the server.
blogApp2
.factory('Posts', [
    '$resource', function($resource) {
        return $resource('api/posts/?{page}', {page:'@page'}, {
            query: {
                method:'GET',
                isArray: false,
                transformResponse: function(data, headersGetter) {
                    return {
                        data: angular.fromJson(data),
                        headers: headersGetter()
                    };
                }
            }
        });
    }]
);