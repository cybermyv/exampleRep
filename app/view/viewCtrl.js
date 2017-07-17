/**
 * @desc контроллер для получения данных с сервера, данные будут отрисованы директиовой tableList
 * @example
 */

export default function viewCtrl( $http) {
    var vm = this;

    $http.get('http://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
            vm.recs = response.data;
            console.log(vm.recs);
        });


} // controller