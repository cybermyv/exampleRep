/**
 * @desc view - контроллер
 */
import angular from 'angular';
//import 'angular-ui-router';
import './../services';
import  'angular-ui-grid';
import './view.css';
import './../css/ui-grid.css';
////import 'angular-bootstrap/ui-bootstrap';
////import 'angular-bootstrap/ui-bootstrap-tpls';
//
////import './../css/ui-bootstrap-csp.css';
import 'angular-ui-bootstrap';
//import 'angular-ui-bootstrap/dist/ui-bootstrap';
//import 'angular-ui-bootstrap/dist/ui-bootstrap-tpls';
//import 'angular-ui-bootstrap/dist/ui-bootstrap-csp.css';
import './../css/bootstrap.css';


let viewModule = angular.module('app.view',
    [
        'ui.router',
        'services',
        'ui.grid',
        'ui.grid.edit',
        'ui.grid.selection',
        'ui.grid.resizeColumns',
        'ui.bootstrap'
    ]);

viewModule.config(($stateProvider)=> {
    $stateProvider
        .state('view', {
            url: '/view',
            templateUrl: 'app/view/view.list.html',
            resolve: {
                view: function(ViewService) {
                    return ViewService.query().$promise
                }
            },
            controller: function ($scope, $state, $uibModal,  ViewService, view) {
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
                $scope.removing = function(){

                    $scope.employeer = $scope.mySelectedRows.entity;

                  //  console.log($scope.employeer);

                    if(!$scope.employeer){
                        alert('Запись не выбрана');
                    } else {
                        var modalInstance = $uibModal.open({
                            templateUrl: 'app/view/view.del.html',
                            scope: $scope
                        });

                        modalInstance.result
                            .then(
                                function(){
                                    $scope.view.$delete();
                                    $state.reload();
                                },
                                function (){
                                    //  $state.go('^');
                                }
                            )
                    }
                };

            }//controller

        }) // state.view
    .state('view.add',{
        url : '/add',
        template: '<ui-view>',
        controller: function($scope, $state, $uibModal, ViewService){
            $scope.view = new ViewService();

            console.log('moduleInst');

            var modalInstance = $uibModal.open({

               templateUrl:'app/view//view.add.html',
                scope: $scope
            });//modalInst

            modalInstance.result
                .then(
                    function(){
                        $scope.view.$save();
                        $state.go('^', null, {reload: true});
                },
                    function() {$state.go('^')}
                )
        }
    })//state.add
});

export default viewModule;
