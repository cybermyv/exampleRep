import angular from 'angular';
import 'angular-resource';
import 'angular-ui-router';
//import 'angular-bootstrap';
//import './css/bootstrap.css';
//import './css/ui-bootstrap-csp.css';



import './services';
import  './view/viewctrl';


//import mainMenu from './menu/menuDirect.js';
//import viewDirective from './view/viewDirect.js';


let app = angular.module('app',['app.view']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/view');

});

export default app;

//http://devacademy.ru/posts/rukovodstvo-po-stilyu-programmirovaniya-i-oformleniya-prilozhenij-na-angularjs/