'use strict';

angular.module('webApp').factory('userService', ['$http', function($http){
  return {
    login: function(key, password) {
      return $http.post('http://api.aqueducts.baidu.com/v3/login', {key: key, password: password});

    },


    join: function(email, name, password) {
      return $http.post('http://api.aqueducts.baidu.com/v3/join', {name: name, password: password, email: email});
    },


  };


}]);