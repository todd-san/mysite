'use strict';
angular.module('sewSpecialApp')
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
    .factory('Post', ['ExtResource', function($resource) {
        return $resource('api/posts/:id/', {id:'@id'}, {query: {isArray: false}});
    }])
    .factory('About', ['$resource',
        function($resource) {
        return $resource('api/aboutMe/', {
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
    }]);
