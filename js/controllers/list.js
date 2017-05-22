(function(){
    angular
        .module("turtleFacts")
        .controller("listCtrl", ListController);

        ListController.$inject = ['quizMetrics','DataService'];

        function ListController(quizMetrics, DataService){
            var vm = this;

            vm.quizMetrics = quizMetrics;
            //vm.dataService = DataService;
            vm.data = DataService.turtlesData;
            vm.activeTurtle = {};
            vm.changeActiveTurtle = changeActiveTurtle;
            vm.search = "";
            //vm.quizActive = false;
            vm.activateQuiz = activateQuiz;

            function changeActiveTurtle(index){
                vm.activeTurtle = index;

            }

            function activateQuiz(){
                quizMetrics.changeState("quiz",true);
                //vm.quizMetrics.quizActive = true;
                vm.quizActive = true;
            }
            
        }

})();