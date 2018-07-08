angular.module('sewSpecialApp')
    .config(['$interpolateProvider', '$resourceProvider', '$httpProvider', 'markedProvider',
        function($interpolateProvider, $resourceProvider, $httpProvider, markedProvider) {

            // add csrf tokens to all communications
            $httpProvider.defaults.xsrfCookieName = 'csrftoken';
            $httpProvider.defaults.xsrfHeaderName = "X-CSRFToken";

            // Change angular's default template interpolation symbol since it conflicts with Django.
            $interpolateProvider.startSymbol('<$');
            $interpolateProvider.endSymbol('$>');

            // Fix the trailing slashes issue
            $resourceProvider.defaults.stripTrailingSlashes = false;

            markedProvider.setOptions({
                gfm: true,
                tables: true,
                highlight: function(code, lang){
                    if (lang){
                        return hljs.highlight(lang, code, true).value;
                    } else {
                        return hljs.highlightAuto(code).value;
                    }
                }
            })

            // markedProvider.setOptions({gfm: true});

        }]
    );