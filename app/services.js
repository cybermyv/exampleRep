/**
 * Created by y on 16.07.2017.
 */
import angular from 'angular';


let services = angular.module('services', ['ngResource'])
    .service('ViewService',
        function($resource){

        return $resource('/api/view/:id',
            {id:'@id'},
            {update:{method: 'PUT'}}
        )

    });

export default services;