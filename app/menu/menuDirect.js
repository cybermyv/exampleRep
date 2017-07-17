/**
 * @desc  директива для отрисовки основного меню
 * @example <div main-menu></div>
 */



export default function mainMenu() {
    return {

        templateUrl: 'app/menu/main-menu.html',
        restrict: 'EA',
        link: link
    };


    function link() {
        console.log('mainMenu -- onCreate')
      
    }
}