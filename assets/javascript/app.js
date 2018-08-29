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
            correct: "black"
        },
        {
            question: "What is my favorite color2?",
            answers: {
                a: "red2",
                b: "green2",
                c: "blue2",
                d: "pink2"
            },
            correct: "purple"
        },
        {
            question: "What is my favorite color3?",
            answers: {
                a: "red3",
                b: "green3",
                c: "blue3",
                d: "pink3"
            },
            correct: "teal"
        },
    ];

    console.log(typeof (myQuestions[2].answers.a));


    var correctAnswers = [];

    for (var i = 0; i < myQuestions.length; i++) {
        console.log(myQuestions[i].question);
        $("#questions").append($("<br>"), myQuestions[i].question);
        correctAnswers.push(myQuestions[i].correct);

        var innerLoop = myQuestions[i].answers;

        for (var letter in innerLoop) {
            console.log(innerLoop[letter]);
            $("#questions").append($("<br>"), $("<input type='radio' class='form-check-input ans' name='exampleRadios' value=" + innerLoop[letter] + " checked>"), innerLoop[letter]);
            console.log($(".ans").attr("value"));
        };
    };

    console.log(correctAnswers);
    var black = "black"

    console.log(correctAnswers.includes(black));

    $('#btnStatus').click(function () {
        var isChecked = $(".ans").prop("checked");
        alert(isChecked);
        console.log($(".ans").prop("checked"))
    });

    if ($(".ans").prop("checked") && correctAnswers.includes($(".ans").attr("value"))) {
        score++
    };



    // function showQuestions() {

    // var answersList = [];

    // for (var i = 0; i < questions.length; i++) {
    //     answersList.push(questions[i].answers.a);
    //     answersList.push(questions[i].answers.b);
    //     answersList.push(questions[i].answers.c);
    //     answersList.push(questions[i].answers.d);
    // };

    // console.log(answersList);


    // myQuestions.forEach(function (e) {
    //     $("#questions").append(e.question, $("<br>"), e.answers.a, $("<br>"), e.answers.b, $("<br>"), e.answers.c, $("<br>"), e.answers.d, $("<br>"));
    //     $("#answers").html("<input class='form-check-input' type='radio'>" + e.answers.a)

    //     e.answers.forEach(function (k) {
    //         $("#answers").html("<input class='form-check-input' type='radio'>" + answers.k);
    //     });

    // });


    // };

    //Variable timer will hold the setInterval when we start the slideshow
    var intervalId;

    //Scores
    var numberCorrect = 3;
    var numberQuestions = 10;
    var score = 0;

    //Two mintue count down.
    var countDown = {

        time: 120,

        //A function that at every second it applys the timeCount function.
        startTimer: function () {
            intervalId = setInterval(countDown.timeCount, 1000);
        },

        //A function that minuses 1 secound 
        timeCount: function () {
            countDown.time--;
            $("#display").text(countDown.timeConverter(countDown.time));

            //When countDown ends the game stops ands the questions and shows results.
            if (countDown.time <= 0) {
                $("#questions").hide();
                clearInterval(intervalId);
                $("#display").hide();
                countDown.myResults();
            };
        },

        //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
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

        //if startment showing percentage of right answers
        myResults: function () {
            score = (numberCorrect / numberQuestions) * 100;
            $("#score").append(score + "%");
        },
    };

    //When startButton is clicked it reveals all the questions and starts the countDown
    $("#startButton").on("click", function () {
        //show all the question
        countDown.startTimer();
        $("#startButton").hide();
        // showQuestions();
    });





    //if statment when all questions are filled end game

});