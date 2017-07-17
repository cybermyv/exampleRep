/**
 * @desc контроллер для получения данных с сервера
 * @example
 */
import angular from 'angular';
import 'angular-ui-router';
import './../services';
import  'angular-ui-grid';

let viewModule = angular.module('app.view',
    [
        'ui.router',
        'services',
        'ui.grid',
        'ui.grid.edit',
        'ui.grid.selection',
        'ui.grid.resizeColumns'
    ]);

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