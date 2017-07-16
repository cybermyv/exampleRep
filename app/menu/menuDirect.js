/**
 * @desc  директива для отрисовки основного меню
 * @example <div main-menu></div>
 */


export default function mainMenu() {
    var directive = {
        link: link,
        templateUrl: '/pages/main-menu.html',
        restrict: 'EA'
    };
    return directive;

    function link() {
        console.log('mainMenu -- onCreate')
      
    }
}