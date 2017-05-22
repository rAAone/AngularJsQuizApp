(function(){
    angular
        .module("turtleFacts")
        .factory("quizMetrics", QuizMetrics);

   QuizMetrics.$inject = ['DataService'];  

   //var correctAnswers = [1, 2, 3, 0, 2, 0, 3, 2, 0, 3];   

   function QuizMetrics(DataService){

       var quizObj = {
           quizActive : false,
           resultsActive : false,
           changeState : changeState,
           correctAnswers:[],
           markQuiz : markQuiz,
           numberCorrect : 0
       };
       
       return quizObj;

       function changeState(metric,state){
            if(metric === "quiz"){
                quizObj.quizActive = state;
                console.log("quizActive", state)
            } else if(metric === "results"){
                quizObj.resultsActive = state;
                console.log("I am here", state);
            }else{
                return false;
            }
            
       }

       function markQuiz(){
            quizObj.correctAnswers = DataService.correctAnswers;
            for(var i = 0; i<DataService.quizQuestions.length;i++){
                if(DataService.quizQuestions[i].selected === DataService.correctAnswers[i]){
                    DataService.quizQuestions[i].correct = true;
                    quizObj.numberCorrect++;
                }else{
                    DataService.quizQuestions[i].correct = false;
                }
            }
       }
   }     
})();