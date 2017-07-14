//директива для отрисовки основного меню


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