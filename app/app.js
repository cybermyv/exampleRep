import angular from 'angular';
import ngResource from 'angular-resource';

//import './js/ctrl/viewCtrl.js' ;


import mainMenu from './menu/menuDirect.js';
import tableList from './view/viewDirect.js';


export default angular.
                module('app', ['ngResource'])
                    .directive('mainMenu', mainMenu)
                    .directive('tableList', tableList);


//http://devacademy.ru/posts/rukovodstvo-po-stilyu-programmirovaniya-i-oformleniya-prilozhenij-na-angularjs/