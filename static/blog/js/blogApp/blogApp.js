// -----------------------------------------------------------------------------------------------------------------
// APP DEFINITION
// -----------------------------------------------------------------------------------------------------------------
var blogApp = angular
    .module('blogApp', ['ngResource', 'ui.router', 'ngSanitize', 'treeGrid', 'ngDragDrop',
            'template/treeGrid/treeGrid.html']);

// -----------------------------------------------------------------------------------------------------------------
// CONFIGURATIONS
// -----------------------------------------------------------------------------------------------------------------
blogApp.config(['$interpolateProvider', '$stateProvider', '$resourceProvider',
    '$urlRouterProvider', '$httpProvider',
    function($interpolateProvider, $stateProvider, $resourceProvider,
             $urlRouterProvider, $httpProvider) {

        // add csrf tokens to all communications
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = "X-CSRFToken";

        // Change angular's default template interpolation symbol since it conflicts with Django.
        $interpolateProvider.startSymbol('<$');
        $interpolateProvider.endSymbol('$>');

        // Fix the trailing slashes issue
        $resourceProvider.defaults.stripTrailingSlashes = false;

        // Define view states
        $stateProvider
        .state('default', {
            url:'/{specId}',
            views:{
                'parentView': {
                    templateUrl: 'template/parent-view.html',
                    controller: "parentViewController",
                    controllerAs: 'parentCntrl'
                },
                'sequenceView': {
                    templateUrl: 'template/sequence-view.html',
                    controller: "sequenceViewController",
                    controllerAs: 'sequenceCntrl'
                },
                'libraryView': {
                    templateUrl: 'template/library-view.html',
                    controller: "libraryViewController",
                    controllerAs: 'libraryCntrl'
                },
                'diameterView': {
                    templateUrl: 'template/diameter-view.html',
                    controller: "diameterViewController",
                    controllerAs: 'diameterCntrl'
                },
                'imageView': {
                    templateUrl: 'template/image-view.html',
                    controller: 'imageViewController',
                    controllerAs: 'imageCntrl'
                },
                'treeView': {
                    templateUrl: 'template/tree-view.html',
                    controller: 'treeViewController',
                    controllerAs: 'treeCntrl'
                },
                'submitView': {
                    templateUrl: 'template/submit-view.html',
                    controller: 'submitViewController',
                    controllerAs: 'submitCntrl'
                }
            },
            resolve: {
                current_user: ['CurrentUser', function(CurrentUser){
                    return CurrentUser.query().$promise
                }],
                spec: ['$transition$', 'TireSpec', function($transition$, TireSpec){
                    return TireSpec.get({id: $transition$.params().specId}).$promise
                }],
                design: ['spec', 'TireDesign', function(spec, TireDesign){
                    return TireDesign.get({id: spec.design}).$promise
                }],
                phase: ['spec', 'TireProjectPhase', function(spec, TireProjectPhase){
                    return TireProjectPhase.get({id: spec.phase}).$promise
                }],
                project: ['spec', 'TireProject', function(spec, TireProject){
                    return TireProject.get({id: spec.project}).$promise
                }],
                tree_data: ['EmptyKpatTable', function(EmptyKpatTable){
                    return EmptyKpatTable
                }],
                expanding_property: ['ExpandingPropKpat', function(ExpandingPropKpat){
                    return ExpandingPropKpat
                }],
                col_defs: ['ColumnDefsKpat', function(ColumnDefsKpat){
                    return ColumnDefsKpat
                }],
                pitch_sequences: ['PitchSequences', function(PitchSequences){
                    return PitchSequences.query().$promise
                }]
            }
        })
        .state('upload', {
            url:'/{spec}/upload',
            views:{
                'uploadView': {
                    templateUrl: 'template/upload-view.html',
                    controller: "uploadViewController",
                    controllerAs: 'uploadCntrl'
                }
            },
            resolve: {
                users: ['Users', function(Users){
                    return Users.query().$promise
                }],
                current_user: ['CurrentUser', function(CurrentUser){
                    return CurrentUser.query().$promise
                }],
                spec: ['$transition$', 'TireSpec', function($transition$, TireSpec){
                    return TireSpec.get({id: $transition$.params().spec}).$promise
                }],
                tread_pattern :['TreadPattern', function(TreadPattern){
                    return new TreadPattern();
                }]
            }
        });
        $urlRouterProvider.otherwise('/');
    }]);
