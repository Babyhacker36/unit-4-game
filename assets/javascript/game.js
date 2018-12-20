$(document).ready(function () {
    var lanternNumber;
    var totalScore = 0;
    var wins = 0;
    var losses = 0;
    var lantern1;
    var lantern2;
    var lantern3;
    var lantern4;

    function newNumbers() {
        lanternNumber = Math.floor(Math.random() * 110) + 20;
        lantern1 = Math.ceil(Math.random() * 12);
        lantern2 = Math.ceil(Math.random() * 12);
        lantern3 = Math.ceil(Math.random() * 12);
        lantern4 = Math.ceil(Math.random() * 12);
    }

    function newGame() {
        newNumbers();
        totalScore = 0;
        $("#lanternNumber").text(lanternNumber);
        $("#totalScore").text(totalScore);
        $("#lantern1").attr("data-lanternValue", lantern1);
        $("#lantern2").attr("data-lanternValue", lantern2);
        $("#lantern3").attr("data-lanternValue", lantern3);
        $("#lantern4").attr("data-lanternValue", lantern4);
        $("#wins").text(wins);
        $("#losses").text(losses);
        $("#winOrLose").text("");

        //console.log(lantern1, lantern2, lantern3, lantern4);
    }

    function youWin() {
        $("#winOrLose").text("YOU WIN!");
        wins++;
        $("#wins").text(wins);
    }

    function youLose() {
        $("#winOrLose").text("YOU LOSE");
        losses++;
        $("#losses").text(losses);
    }

    newGame();

    $(".lanternimg").hover(function () {
            $(this).css({
                opacity: 0.3
            });
        },
        function () {
            $(this).css({
                opacity: 1
            });
        });

    // Function to add the lanterns
    $(".lanternimg").on("click", function () {
        if (totalScore >= lanternNumber) {
            return;
        }

        var lanternValue = $(this).attr("data-lanternValue");
        lanternValue = parseInt(lanternValue);
        totalScore += lanternValue;
        $("#totalScore").text(totalScore);

        if (totalScore === lanternNumber) {
            youWin();
        } else if (totalScore > lanternNumber) {
            youLose();
        }
    });

    $(".btn").on("click", function () {
        newGame();
    });

});