(function(angular){

  'use strict';
  angular.module('TheNG', []).directive('validateOnBlur', function() {
  return {
      link: function(scope, element, attrs) {
        var validate = function(email) {
          return email.indexOf('@gmail.com') !== -1;
        };
        element.on('blur', function() {
          if (!validate(scope.email)) {
            element.addClass('error - box');
          }
        });
      }
   };
});

  })(window.angular);