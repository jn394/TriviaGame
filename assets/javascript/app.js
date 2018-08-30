$(document).ready(function () {

    var myQuestions = [

        {
            question: "In the Harry Potter series, what is the name of Harry’s pet owl?",
            answers: {
                a: "Owlbert Einstein",
                b: "Hedwig",
                c: "Ghost",
                d: "Hootie"
            },
            correct: "Hedwig"
        },
        {
            question: "Emma Watson is known for playing which character in Harry Potter?",
            answers: {
                a: "Hermione Granger",
                b: "Luna Lovegood",
                c: "Ginny Weasley",
                d: "Cho Chang"
            },
            correct: "Hermione Granger"
        },
        {
            question: "What is Harry Potter's House in Hogwarts?",
            answers: {
                a: "Ravenclaw",
                b: "Hufflepuff",
                c: "Slytherin",
                d: "Gryffindor"
            },
            correct: "Gryffindor"
        },
        {
            question: "In what year was the first Harry Potter movie released?",
            answers: {
                a: "1999",
                b: "2000",
                c: "2001",
                d: "2002"
            },
            correct: "2001"
        },
        {
            question: "Among the wizarding community, the term Muggle refers to what kind of person?",
            answers: {
                a: "A magical person who is really bad at magic",
                b: "A magical person with only one magical parent",
                c: "A non-magical person from a non-magical family",
                d: "A non-magical person from a magical family"
            },
            correct: "A non-magical person from a non-magical family"
        },
        {
            question: "What colour is the Hogwarts Express?",
            answers: {
                a: "Emerald",
                b: "Scarlet",
                c: "Indigo",
                d: "Green"
            },
            correct: "Scarlet"
        },
        {
            question: "How are letters sent in the wizarding world?",
            answers: {
                a: "Via broomstick",
                b: "Via lan line",
                c: "Via postmen",
                d: "Via owls"
            },
            correct: "Via owls"
        },
        {
            question: "Who played Lord Voldemort in the movies?",
            answers: {
                a: "Jeremy Irons",
                b: "Tom Hiddleston",
                c: "Gary Oldman",
                d: "Ralph Fiennes"
            },
            correct: "Ralph Fiennes"
        },
        {
            question: "What is the golden ball in Quidditch called?",
            answers: {
                a: "Snitch",
                b: "Quaffle",
                c: "Bludger",
                d: "Wiffles"
            },
            correct: "Snitch"
        },
        {
            question: "From what King's Cross platform does the Hogwarts Express leave?",
            answers: {
                a: "Eight & One-Quarter",
                b: "Nine & Three-Quarters",
                c: "Five & A Half",
                d: "Eleventeen"
            },
            correct: "Nine & Three-Quarters"
        }
    ];

    //Hiding display and submit buttons
    $("#display").hide();
    $("#submitButton").hide();

    //Variable timer will hold the setInterval when we start the slideshow
    var intervalId;

    //Variables
    var numberCorrect = 0;
    var numberQuestions = 10;
    var score;
    var correctAnswers = [];

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

        //A functions that when button is clicked the game ends and score is releaved.
        mySubmit: function () {
            $("#submitButton").on("click", function () {
                clearInterval(intervalId);
                $("#display").hide();
                $("#questions").hide();
                $("#submitButton").hide();
                countDown.myResults();
            });
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
            $("#score").append("You got " + score + "%");
        },
    };

    //When startButton is clicked it reveals all the questions and starts the countDown
    $("#startButton").on("click", function () {
        //show all the question
        $("#startButton").hide();
        $("#display").show();
        $("#submitButton").show();
        countDown.startTimer();
        countDown.showQuestions();
        countDown.mySubmit();
    });

});