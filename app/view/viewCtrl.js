/**
 * @desc view - контроллер
 */
import angular from 'angular';

import 'angular-resource';

import 'angular-ui-router'
import './../services';
import  'angular-ui-grid';
import './view.css';
import './../css/ui-grid.css';
import 'ng-dialog';

let viewModule = angular.module('app.view',
    [
        'services',
        'ui.router',
        'ui.grid',
        'ui.grid.edit',
        'ui.grid.selection',
        'ui.grid.resizeColumns',
        'ngDialog'
    ]);

viewModule.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('view', {
            url: '/view',
            templateUrl: 'app/view/view.list.html',
            resolve: {
                view: function (ViewService) {
                    return ViewService.query().$promise
                }
            },
            controller: function ($scope, $state, ngDialog, ViewService, view) {
                $scope.gridOptions = {
                    data: view,
                    columnDefs: [
                        {field: 'id', displayName: '#'},
                        {field: 'userId', displayName: 'Пользователь'},
                        {field: 'title', displayName: 'Название'},
                        {field: 'body', displayName: 'Тело сообщения'}
                    ],
                    enableRowSelection: true,
                    enableRowHeaderSelection: false,
                    multiSelect: false

                };
                $scope.gridOptions.onRegisterApi = function (gridApi) {
                    $scope.gridApi = gridApi;

                    $scope.mySelectedRows = $scope.gridApi.selection.getSelectedRows();

                    gridApi.selection.on.rowSelectionChanged($scope, function (row) {

                        $scope.mySelectedRows = row;

                        //    console.log($scope.mySelectedRows);
                        //  debugger;
                    });
                };
                $scope.removing = function () {

                    $scope.view = $scope.mySelectedRows.entity;


                    if (!$scope.view) {
                        alert('Запись не выбрана');
                    } else {
                        var dialog = ngDialog.openConfirm({
                            templateUrl: 'app/view/view.del.html',
                            className: 'ngdialog-theme-default',
                            scope: $scope
                        });

                        //
                        //dialog.then(function (data) {
                        //    console.log(data.id + ' has been dismissed.');
                        //});

                        dialog.then(
                            function (value) {
                                console.log($scope.view);
                                $scope.view.$delete();
                                $state.reload();
                            },
                            function (reason) {
                                console.log('Modal promise rejected. Reason: ', reason);
                                //   $state.go('^');
                            }
                        );


                    }
                };

            }//controller

        })
        .state('view.add', {
            url: '/add',
            //template: '<ui-view></ui-view>',

            controller: function ($scope, $state, ngDialog, ViewService) {

                $scope.viewVal = new ViewService();

                var dialog = ngDialog.open({
                    templateUrl: 'app/view/view.add.html',
                    className: 'ngdialog-theme-default',
                    scope: $scope
                });


                dialog.then(
                    function (value) {
                        console.log($scope.viewVal);
                        $scope.viewVal.$save();
                        $state.go('^', null, {reload: true});
                    },
                    function (reason) {
                        console.log('Modal promise rejected. Reason: ', reason);
                          $state.go('^');
                    }
                );
            }
        })
});

export default viewModule;
