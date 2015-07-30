define([
    'angular',
    'angular-couch-potato',
    'lodash',
    'angular-ui-router',
    'angular-resource'

], function (ng, couchPotato, _) {
    'use strict';

    var module = ng.module('app.demo.inbox', [
        'ui.router',
        'ngResource'
    ]);

    couchPotato.configureApp(module);

    module.config(function ($stateProvider, $couchPotatoProvider) {

        $stateProvider
            .state('app.demo.inbox', {
                url: '/inbox',
                data: {
                    title: 'Inbox'
                },
                views: {
	                "content@app": {
                        templateUrl: 'apps/demo/components/inbox/views/inbox-layout.html',
                        controller: function ($scope, config) {
                            $scope.config = config.data;
                            $scope.deleteSelected = function(){
                                $scope.$broadcast('$inboxDeleteMessages')
                            }
                        },
                        controllerAs: 'inboxCtrl',
                        resolve: {
                            deps: $couchPotatoProvider.resolveDependencies([
                                'apps/demo/components/inbox/directives/messageLabels'
                            ]),
                            config: function (InboxConfig) {
                                return InboxConfig;
                            }
                        }
                    }
                }

            })
            .state('app.demo.inbox.folder', {
                url: '/:folder',
                views: {
                    inbox: {
                        templateUrl: 'apps/demo/components/inbox/views/inbox-folder.html',
                        controller: function ($scope, messages, $stateParams) {
                            $scope.$parent.selectedFolder = _.find($scope.$parent.config.folders, {key: $stateParams.folder});
                            $scope.messages = messages;

                            $scope.$on('$inboxDeleteMessages', function(event){
                                angular.forEach($scope.messages, function(message, idx){
                                    if(message.selected){
                                        message.$delete(function(){
                                            $scope.messages.splice(idx, 1);
                                        })
                                    }
                                });
                            });

                        },
                        resolve: {
                            messages: function (InboxMessage, $stateParams) {
                                return InboxMessage.query({folder: $stateParams.folder});
                            }
                        }
                    }
                }
            })
            .state('app.demo.inbox.folder.detail', {
                url: '/detail/:message',
                views: {
                    "inbox@app.demo.inbox": {
                        templateUrl: 'apps/demo/components/inbox/views/inbox-detail.html',
                        controller: function ($scope, message) {
                            $scope.message = message;
                        },
                        resolve: {
                            message: function (InboxMessage, $stateParams) {
                                return InboxMessage.get({id: $stateParams.message})
                            }
                        }
                    }
                }
            })
            .state('app.demo.inbox.folder.replay', {
                url: '/replay/:message',
                views: {
                    "inbox@app.demo.inbox": {
                        templateUrl: 'apps/demo/components/inbox/views/inbox-replay.html',
                        controller: function ($scope, $timeout, $state, replayTo) {
                            $scope.replayTo = replayTo;
                            $scope.sending = false;
                            $scope.send = function(){
                                $scope.sending = true;
                                $timeout(function(){
                                    $state.go('app.demo.inbox.folder')
                                }, 1000);
                            }
                        },
                        controllerAs: 'replayCtrl',
                        resolve: {
                            deps: $couchPotatoProvider.resolveDependencies([
                                'apps/demo/modules/forms/directives/input/smartSelect2',
                                'apps/demo/modules/forms/directives/editors/smartSummernoteEditor'
                            ]),
                            replayTo: function (InboxMessage, $stateParams) {
                                return InboxMessage.get({id: $stateParams.message})
                            }
                        }
                    }
                }
            })
            .state('app.demo.inbox.folder.compose', {
                url: '/compose',
                views: {
                    "inbox@app.demo.inbox": {
                        templateUrl: 'apps/demo/components/inbox/views/inbox-compose.html',
                        controller: function ($scope, $timeout, $state) {
                            $scope.sending = false;
                            $scope.send = function(){
                                $scope.sending = true;
                                $timeout(function(){
                                    $state.go('app.demo.inbox.folder')
                                }, 1000);
                            }
                        },
                        controllerAs: 'composeCtrl',
                        resolve:{
                            deps: $couchPotatoProvider.resolveDependencies([
                                'apps/demo/modules/forms/directives/input/smartSelect2',
                                'apps/demo/modules/forms/directives/editors/smartSummernoteEditor'
                            ])
                        }
                    }
                }
            });
    });

    module.run(function($couchPotato){
        module.lazy = $couchPotato;
    });

    return module;
});
