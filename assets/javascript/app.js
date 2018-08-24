$(document).ready(function () {

    //hide all the questions

    //Variable timer will hold the setInterval when we start the slideshow
    var intervalId;

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

            //When countDown ends the game stops
            if(countDown.time <= 0){

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
        }

    };

    //When startButton is clicked it reveals all the questions and starts the countDown
    $("#startButton").on("click", function () {
        //show all the question
        countDown.startTimer();
        $("#startButton").hide();
    });


    //if startment showing percentage of right answers

    //if statment when all questions are filled end game

});