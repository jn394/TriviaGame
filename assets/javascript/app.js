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
        },
        {
            question: "What is my favorite color2?",
            answers: {
                a: "red2",
                b: "green2",
                c: "blue2",
                d: "pink2"
            },
        },
        {
            question: "What is my favorite color3?",
            answers: {
                a: "red3",
                b: "green3",
                c: "blue3",
                d: "pink3"
            },
        },
    ];

    console.log(typeof (myQuestions[2].answers.a));


    // for (var key in myQuestions) {
    //     //Gives me question1, question2, question3,...etc
    //     console.log(key);
    //     var questionsArray = myQuestions[key];

    //     for (var i in questionsArray) {
    //         //Gives me contents inside 'question' and 'answers'.
    //         console.log(questionsArray[i]);
    //         $("#questions").append(questionsArray[i]);

    //         var item = questionsArray.answers;
    //         for (var j in item) {
    //             //Gives me the individual contents inside answers
    //             console.log(item[j]);
    //             $("#questions").append($("<br>"), item[j]);
    //         };
    //     };
    // };

    // var quizContainer = $("#quiz");
    // var resultsContainer = $("#results");
    // var submitButton = $("#submit");

    // generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

    // function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    //     function showQuestions(questions, quizContainer) {
    //         // we'll need a place to store the output and the answer choices
    //         var output = [];
    //         var answers;
    //         console.log("working1")

    //         // for each question...
    //         for (var i = 0; i < questions.length; i++) {

    //             // first reset the list of answers
    //             answers = [];
    //             console.log("working2")
    //             // for each available answer...
    //             for (letter in questions[i].answers) {

    //                 // ...add an html radio button
    //                 answers.push(
    //                     '<label>'
    //                     + '<input type="radio" name="question' + i + '" value="' + letter + '">'
    //                     + letter + ': '
    //                     + questions[i].answers[letter]
    //                     + '</label>'
    //                 );
    //             }

    //             // add this question and its answers to the output
    //             output.push(
    //                 '<div class="question">' + questions[i].question + '</div>'
    //                 + '<div class="answers">' + answers.join('') + '</div>'
    //             );
    //         }

    //         // finally combine our output list into one string of html and put it on the page
    //         quizContainer.innerHTML = output.join('');
    //     }


    //     function showResults(questions, quizContainer, resultsContainer) {

    //         // gather answer containers from our quiz
    //         var answerContainers = quizContainer.querySelectorAll('.answers');

    //         // keep track of user's answers
    //         var userAnswer = '';
    //         var numCorrect = 0;

    //         // for each question...
    //         for (var i = 0; i < questions.length; i++) {

    //             // find selected answer
    //             userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

    //             // if answer is correct
    //             if (userAnswer === questions[i].correctAnswer) {
    //                 // add to the number of correct answers
    //                 numCorrect++;

    //                 // color the answers green
    //                 answerContainers[i].style.color = 'lightgreen';
    //             }
    //             // if answer is wrong or blank
    //             else {
    //                 // color the answers red
    //                 answerContainers[i].style.color = 'red';
    //             }
    //         }

    //         // show number of correct answers out of total
    //         resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    //     }

    //     // show questions right away
    //     showQuestions(questions, quizContainer);

    //     // on submit, show results
    //     submitButton.onclick = function () {
    //         showResults(questions, quizContainer, resultsContainer);
    //     }

    // }


    for (var i = 0; i < myQuestions.length; i++) {
        console.log(myQuestions[i].question);
        $("#questions").append(myQuestions[i].question);

        var innerLoop = myQuestions[i].answers;

        for (var letters in innerLoop) {
            console.log(innerLoop[letters]);
            $("#answers").append(innerLoop[letters]);
        }
    }









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
    var score;

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