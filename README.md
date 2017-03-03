# number-animator

A directive to animate a number value from `start` to `end` in a specified `duration` milliseconds.

## Usage

You can either download or clone the github repository and include dist/number-animator.js or dist/number-animator.min.js in your index.html

```
<span number-animator="{start: 0, end: 100, duration: 1000}"></span>
```

Counts reverse too
```
<span number-animator="{start: 100, end: 0, duration: 1000}"></span>
```

And even negative numbers!
```
<span number-animator="{start: 10, end: -10, duration: 1000}"></span>
```

You are not restricted to `span`, you can use any element of your choice.

## Full example

```
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.2/angular.min.js"></script>
    <script src="number-animator.min.js"></script>
</head>
<body ng-app="app">
    <div number-animator="{start: 0, end: 100, duration: 1000}"></div>
    <script>
        angular.module('app', ['ngNumberAnimator']);
    </script>
</body>
</html>
```