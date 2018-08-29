$(document).ready(function () {

    var myQuestions = [

        {
            question: "What is my favorite color1?",
            answers: {
                a: "red",
                b: "green",
                c: "blue",
                d: "pink"
            },
            correct: "pink"
        },
        {
            question: "What is my favorite color2?",
            answers: {
                a: "red2",
                b: "green2",
                c: "blue2",
                d: "pink2"
            },
            correct: "green2"
        },
        {
            question: "What is my favorite color3?",
            answers: {
                a: "red3",
                b: "green3",
                c: "blue3",
                d: "pink3"
            },
            correct: "red3"
        },
    ];

    //Variable timer will hold the setInterval when we start the slideshow
    var intervalId;

    //Variables
    var numberCorrect = 0;
    var numberQuestions = 10;
    var score;
    var correctAnswers = [];

    //Two mintue count down.
    var countDown = {

        time: 10,

        //A function that at every second it applys the timeCount function.
        startTimer: function () {
            intervalId = setInterval(countDown.timeCount, 1000);
        },

        //A function that minuses 1 secound 
        timeCount: function () {
            countDown.time--;
            $("#display").text(countDown.timeConverter(countDown.time));

            //When the time runs out the questions are hidden and results are shown.
            if (countDown.time <= 0) {
                clearInterval(intervalId);
                $("#display").hide();
                $("#questions").hide();
                countDown.myResults();
            };
        },

        //Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
        timeConverter: function (t) {

            var minutes = Math.floor(t / 60);
            var seconds = t - (minutes * 60);

            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            if (minutes === 0) {
                minutes = "00";
            }
            else if (minutes < 10) {
                minutes = "0" + minutes;
            }
            return minutes + ":" + seconds;
        },

        //A function that shows the questions and answers
        showQuestions: function () {
            for (var i = 0; i < myQuestions.length; i++) {
                //Adds the questions into the "#questions" div
                console.log(myQuestions[i].question);
                $("#questions").append($("<br>"), myQuestions[i].question);
                //Pushes the correct answers into a array
                correctAnswers.push(myQuestions[i].correct);

                var innerLoop = myQuestions[i].answers;
                
                //This for loop starts a loop in the "answers" object 
                for (var letter in innerLoop) {
                    //Adds the answers into the "#questions" div
                    console.log(innerLoop[letter]);
                    $("#questions").append("<br>" + "<input type='radio' class='form-check-input ans' name=" + i + " value=" + innerLoop[letter] + " >" + "<label class='form-check-label' for='exampleRadios1'>" + innerLoop[letter] + "</label>");
                };
            };
        },

        //if startment showing percentage of right answers
        myResults: function () {
            //For loop that goes through all radio buttons that were checked and sees if the values of the radio button are in the correctAnswers array
            for (var j = 0; j < myQuestions.length; j++) {
                if (correctAnswers.includes($("input[name=" + j + "]:checked").val())) {
                    numberCorrect++;
                }
            };
            score = (numberCorrect / numberQuestions) * 100;
            $("#score").append(score + "%");
        },
    };

    //When startButton is clicked it reveals all the questions and starts the countDown
    $("#startButton").on("click", function () {
        //show all the question
        $("#startButton").hide();
        countDown.startTimer(); 
        countDown.showQuestions();
    });

});