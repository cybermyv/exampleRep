/**
 * @desc view - контроллер
 */
import angular from 'angular';
import 'angular-ui-router';
import './../services';
import  'angular-ui-grid';
import './view.css';
import './../css/ui-grid.css';

let viewModule = angular.module('app.view',
    [
        'ui.router',
        'services',
        'ui.grid',
        'ui.grid.edit',
        'ui.grid.selection',
        'ui.grid.resizeColumns'
    ]);

viewModule.config(($stateProvider, $urlRouterProvider)=> {
    $stateProvider
        .state('view', {
            url: '/view',
            templateUrl: 'app/view/view.list.html',
            resolve: {
                view: function(ViewService) {
                    return ViewService.query().$promise
                }
            },
            controller: function ($scope, $state, ViewService, view) {
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
                $scope.gridOptions.onRegisterApi = gridApi => {
                    $scope.gridApi = gridApi;

                    $scope.mySelectedRows = $scope.gridApi.selection.getSelectedRows();

                    gridApi.selection.on.rowSelectionChanged($scope, row=> {
                            $scope.mySelectedRows = row;
                        console.log(row);

                        }
                    );
                };

            }//controller

        })
});

export default viewModule;
//--- убрать потом
//export default function viewCtrl( $http) {
//    var vm = this;
//
//    $http.get('http://jsonplaceholder.typicode.com/posts')
//        .then(function (response) {
//            vm.recs = response.data;
//            console.log(vm.recs);
//        });
//
//
//} // controller