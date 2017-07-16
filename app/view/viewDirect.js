/**
 * @desc  директива для грида и контроллер для получения данных
 * @example <div table-list></div>
 */

import viewCtrl from './../../js/ctrl/viewCtrl.js';

export default function tableList() {
    var directive = {
        link: link,
        templateUrl: 'crud-view.html',
        restrict: 'EA',
        scope: {},
        //controllerAs: vm,
        controller: viewCtrl
    };
    return directive;

    function link() {
        console.log('tableList -- onCreate')

    }
}