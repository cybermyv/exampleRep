import angular from 'angular';
import 'angular-resource';

import './css/bootstrap.css';
import 'ng-dialog/css/ngDialog.min.css';
import 'ng-dialog/css/ngDialog-theme-default.min.css';
import './services';
import  './view/viewctrl';




let app = angular.module('app',['app.view']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/view');

});

export default app;

//http://devacademy.ru/posts/rukovodstvo-po-stilyu-programmirovaniya-i-oformleniya-prilozhenij-na-angularjs/