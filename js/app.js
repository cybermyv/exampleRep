import angular from 'angular';
//import './js/ctrl/viewCtrl.js' ;

import mainMenu from './direct/menuDirect.js';



export default angular.module('app',[])
    .directive('mainMenu', mainMenu);
