angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'https://quiz-api-ars.us-west-2.elasticbeanstalk.com/';

    return service;
}]);