'use strict';
angular.module('blogApp')
    .factory('Posts', ['$resource',
        function($resource) {
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
    }])
    .factory('Post', ['$resource', function($resource) {
        return $resource('api/posts/:id/', {id:'@id'})
    }]);
