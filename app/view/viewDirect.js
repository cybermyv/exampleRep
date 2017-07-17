/**
 * @desc  директива для грида и контроллер для получения данных
 * @example <div table-list></div>
 */

import viewCtrl from './viewCtrl.js';
//import template from '/view.html';
import './view.css';


export default function tableList() {
   return {
        link: link,
        templateUrl:'app/view/view.html',
        restrict: 'EA',
        scope: {},
        controllerAs: 'vm',
        controller: viewCtrl
    };
    function link() {
        console.log('viewCtrl -- onCreate');


    }
}
