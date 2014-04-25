'use strict';

/* Directives */


angular.module('app.directives', []).
  directive('version', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
