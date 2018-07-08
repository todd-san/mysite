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
    .factory('Post', ['ExtResource', function($resource) {
        return $resource('api/posts/:id/', {id:'@id'}, {query: {isArray: false}});
    }])
    .factory('Projects', ['ExtResource', function($resource) {
        return $resource('api/projects/', {query: {isArray: true}});
    }])
    .factory('Services', ['ExtResource', function($resource) {
        return $resource('api/services/', {query: {isArray: true}});
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
    }])
    .factory('Contact', ['$resource',
        function($resource) {
        return $resource('api/contact/', {
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
