'use strict';

angular.module('app', ['app.filters', 'app.services.Quiz', 'app.services.Question', 'app.services.Answers', 'app.directives']).
  config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/quiz/:quizId', {templateUrl: 'partials/quiz.html', controller: QuizCtrl});
    $routeProvider.when('/quiz/:quizId/results', {templateUrl: 'partials/results.html', controller: ResultsCtrl});
    $routeProvider.when('/quiz/:quizId/q/:questionId', {templateUrl: 'partials/question.html', controller: QuestionCtrl});
    $routeProvider.otherwise({redirectTo: '/quiz/questions'});

  }]);