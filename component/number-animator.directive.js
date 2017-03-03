'use strict';

angular
  .module('ngNumberAnimator')
  .directive('numberAnimator', ['$interval', function ($interval) {
    return {
      restrict: 'A',
      template: '<span>{{num}}</span>',
      scope: {
        options: '=numberAnimator'
      },
      link: function(scope) {
        var start = +scope.options.start || 0,
            end = +scope.options.end || (start + 100),
            duration = +scope.options.duration || 2000,
            absValue = Math.abs(end - start),
            curr = start,
            increasing = end > start,
            step = 0,
            interval = 0,
            theInterval = null;

        if(absValue < duration) {
          step = 1;
          interval = duration / absValue;

          // min timeout should be 4ms https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout#Minimum_delay_and_timeout_nesting
          if(interval < 4) {
            interval = 4;
          }
        }
        else {
          step = Math.floor(absValue * 4 / duration);
          interval = 4;
        }

        step = increasing ? step : -1 * step;
        
        theInterval = $interval(function() {
          curr = curr + step;
          if((increasing && curr >= end) || (!increasing && curr <= end)) {
            scope.num = end;
            return $interval.cancel(theInterval);
          }
          
          scope.num = curr;
        }, interval);

        scope.num = start;
      }
    };
  }]);
