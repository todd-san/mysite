'use strict';
/***
 * Extension to the ngResource module. This module enable the $save command to
 * use a POST method to create a new object and a PUT command to update an existing object.
 *
 * Taken from http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
 */
angular.module('sewSpecialApp')
    .factory('ExtResource', ['$resource', function($resource){
        return function(url, params, methods){
            var defaults = {
                update: {method: 'put', isArray: false},
                create: {method: 'post'}
            };

            methods = angular.extend(defaults, methods);
            var resource = $resource(url, params, methods);
            resource.prototype.$save = function(params, success, error){
                if (this.id === undefined){
                    return this.$create(params, success, error);
                }else{
                    return this.$update(params, success, error);
                }
            };
            return resource;
        };
    }]);