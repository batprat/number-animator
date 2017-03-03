'use strict';

describe('ngNumberAnimator module', function () {
    beforeEach(module('ngNumberAnimator'));

    describe('number-animator directive', function () {
        var $interval = null, $compile, $rootScope;
        beforeEach(inject(function (_$interval_, _$compile_, _$rootScope_) {
            $interval = _$interval_;
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));


        it('should print 100 after 1s for {start: 0, end: 100, duration: 1000}', function () {
            var element = $compile('<span number-animator="{start: 0, end: 100, duration: 1000}"></span>')($rootScope);
            $interval.flush(1000);
            expect(element.text()).toEqual('100');
        });

        it('should print 2000 after 1s for {start: 0, end: 2000, duration: 1000}', function () {
            var element = $compile('<span number-animator="{start: 0, end: 2000, duration: 1000}"></span>')($rootScope);
            $interval.flush(1000);
            expect(element.text()).toEqual('2000');
        });

        it('should print 10 after 1s for {start: -10, end: 10, duration: 1000}', function () {
            var element = $compile('<span number-animator="{start: -10, end: 10, duration: 1000}"></span>')($rootScope);
            $interval.flush(1000);
            expect(element.text()).toEqual('10');
        });

        it('should print -10 after 1s for {start: 10, end: -10, duration: 1000}', function () {
            var element = $compile('<span number-animator="{start: 10, end: -10, duration: 1000}"></span>')($rootScope);
            $interval.flush(1000);
            expect(element.text()).toEqual('-10');
        });
    });
});
