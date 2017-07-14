//директива для отрисовки основного меню
//import {MAIN_MENU_CTRL} from './js/ctrl/menuCtrl.js';

//import tmplt from './pages/main-menu.html';


//export default class MainMenuDirective {
//    constructor() {
//        this.restrict = 'E',
//            this.templateUrl = tmplt,
//            this.scope = {}
//            //            this.controller = MAIN_MENU_CTRL,
//            //            this.controller = MainMenuCtrl
//    } //constructor
//
//
//
//    link(scope, element) {
//        // посмотьреть, что происходит в момент создания
//        console.log('state', scope.state);
//        console.log('service', scope.service)
//    } // link
//
//} // class
//
//// export const MAIN_MENU_DIRECTIVE = MainMenuDirective;

export default class MainMenuDirective {
  constructor() {
      
    this.name = "Bobby Tables";
  }
}