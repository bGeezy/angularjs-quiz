'use strict';

/* Controllers */

function QuizCtrl($scope, $routeParams, Quiz, AnswerService) {
  $scope.quiz = Quiz.get({quizId: $routeParams.quizId});
  $scope.clearAnswers = AnswerService.clearAnswers();
  // $scope.setUser = UserService.setUser();
}

function QuestionCtrl($scope, $routeParams, Quiz, Question, AnswerService) {
  
	$scope.quiz = Quiz.get({quizId: $routeParams.quizId});
  $scope.question = Question.get({quizId: $routeParams.quizId, questionId: $routeParams.questionId});
  $scope.answers = AnswerService.getAnswers();
  // $scope.user = LoginService.getUser();


  $scope.isSelected = function(question, option) {
  	return AnswerService.isSelected(question, option);
  }

  $scope.isAnswered = function(question) {
  	return AnswerService.isAnswered(question);
  }
  
  $scope.addAnswer = function(question, option) {
  	AnswerService.addAnswer(question, option);
  };
  
}

function ResultsCtrl($scope, $routeParams, Quiz, AnswerService) {
  $scope.quiz = Quiz.get({quizId: $routeParams.quizId});
  $scope.answers = AnswerService.getAnswers();
  // $scope.user = LoginService.getUser();
  
  $scope.correctAnswers = AnswerService.getCorrectAnswers();
  $scope.incorrectAnswers = AnswerService.getIncorrectAnswers();
}

function MyCtrl1() {}
MyCtrl1.$inject = [];

function MyCtrl2() {}
MyCtrl2.$inject = [];