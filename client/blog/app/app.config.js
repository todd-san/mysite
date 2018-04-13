angular.module('blogApp')
    .config(['$interpolateProvider', '$resourceProvider', '$httpProvider',
        function($interpolateProvider, $resourceProvider, $httpProvider) {

            // add csrf tokens to all communications
            $httpProvider.defaults.xsrfCookieName = 'csrftoken';
            $httpProvider.defaults.xsrfHeaderName = "X-CSRFToken";

            // Change angular's default template interpolation symbol since it conflicts with Django.
            $interpolateProvider.startSymbol('<$');
            $interpolateProvider.endSymbol('$>');

            // Fix the trailing slashes issue
            $resourceProvider.defaults.stripTrailingSlashes = false;


        }]
    );