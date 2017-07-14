/**
 * @desc контроллер для получения данных с сервера, данные будут отрисованы директиовой tableList
 * @example 
 */

export default function viewCtrl($scope,$http) {
console.log('viewCtrl');
//    var vm = this;
//    var vm.recs = [];
////
//    
//         $http.get('http://jsonplaceholder.typicode.com/posts')
//            .then(function (response) {
//                vm.recs = response.data;
//                console.log(vm.recs);
//            });

   // var vm = this;
    var recs = [];

         $http.get('http://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                $scope.recs = response.data;
                console.log(recs);
            });
    
    
} // controller