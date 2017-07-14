import angular from 'angular';
//import './js/ctrl/viewCtrl.js' ;

import MainMenuDirective from './direct/menuDirect.js';
//import MainMenuDirective, {MAIN_MENU_DIRECTIVE } from './menuDirect.js';


export default angular.module('app',[])
    .directive('mainmenu', MainMenuDirective);
//.directive('MainMenuDirective', () => new MainMenuDirective())


//.directive(MAIN_MENU_DIRECTIVE, MainMenuDirective);
