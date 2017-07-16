import angular from 'angular';
//import './js/ctrl/viewCtrl.js' ;


import mainMenu from './../js/direct/menuDirect.js';
import tableList from './../js/direct/viewDirect.js';



export default angular.module('app',[])
    .directive('mainMenu', mainMenu)
    .directive('tableList', tableList);



//http://devacademy.ru/posts/rukovodstvo-po-stilyu-programmirovaniya-i-oformleniya-prilozhenij-na-angularjs/