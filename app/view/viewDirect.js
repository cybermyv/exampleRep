/**
 * @desc  директива для грида и контроллер для получения данных
 * @example <div table-list></div>
 */

import viewCtrl from './viewctrl.js';
import './view.css';



export default function viewDirective() {
   return {
        link: link,
        templateUrl:'app/view/view.list.html',
        restrict: 'EA',
        scope: {},
        controllerAs: 'vm',
        controller: viewCtrl
    };
    function link() {
        console.log('viewDirective -- onCreate');
    }
}
