'use strict';

/* Services */

angular.module('app.services.Quiz', ['ngResource']).factory('Quiz', function($resource){
  return $resource('quiz/:quizId.json', {}, {
    query: {method:'GET', params:{quizId:'quiz'}, isArray:true}
  });
});

angular.module('app.services.Question', ['ngResource']).factory('Question', function($resource){
  return $resource('quiz/:quizId/:questionId.json', {}, {
    query: {method:'GET', params:{quizId:'quiz', questionId:'questions'}, isArray:true}
  });
});

angular.module('app.services.Answers', []).service('AnswerService', function () {
  var answers = new Array();
  return {
    addAnswer: function (question, answer) {
    	answers[question] = answer;
    },
    getAnswers: function () {
      return answers;
    },
    isAnswered: function(question) {
    	return question in answers;
    },
    isSelected: function (question, answer) {
    	if (!(question in answers)) {
    		return false;
    	}
    	return answer.option == answers[question].option;
    },
    clearAnswers: function () {
    	answers = new Array();
    },
    getCorrectAnswers: function () {
    	var correct = [];
    	for (var i in answers) {
    		if (answers[i].correct) {
    			correct.push(answers[i].text);	
    		}
    	};
    	return correct;
    },
    getIncorrectAnswers: function () {
    	var incorrect =[];
    	for (var i in answers) {
    		if (!answers[i].correct) {
    			incorrect.push(answers[i].text);	
    		}
    	};
    	return incorrect;
    }
  };
});

// angular.module('app.services.User', []).service('UserService', function () {
//     var answers = new Array();
//   return {
//     addUser: function (question, answer) {
//         answers[question] = answer;
//     },
//     removeUser : function ()