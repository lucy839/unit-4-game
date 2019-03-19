// computer chooses a random number
function computerChoice(){
    var choice = Math.floor(Math.random() * 100);
    return choice;
}
var computer = computerChoice();
$("#cpu").text(computer);

// global variable
var win  =0;
var loss = 0;
var counter = 0;
var gem1 = randomChoice();
var gem2 = randomChoice();
var gem3 = randomChoice();
var gem4 = randomChoice();
var imgOptions = ["assets/images/crystal1.jpeg", "assets/images/crystal2.jpeg", "assets/images/crystal3.jpeg", "assets/images/crystal4.png"];

// random number assigned to gems per game
function randomChoice(){
    var random = Math.floor(Math.random() * 20);
    return random;
}
var numberOptions = [gem1, gem2, gem3, gem4];

// reset
function reset(){
    counter = 0;
    computer =computerChoice();
    $("#cpu").text(computer); 
    gem1 = randomChoice();
    gem2 = randomChoice();
    gem3 = randomChoice();
    gem4 = randomChoice();
    numberOptions = [gem1, gem2, gem3, gem4];
}

// create gem button
for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", imgOptions[i]);
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageCrystal);
}

// actual game
$(document).ready(function() {
    $(".crystal-image").on("click", function() {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue); 
        counter += crystalValue;
        $("#totalScore").text(counter);
        if (counter == computer) {
            win++;
            $("#win").text(win);
            $("#message").text("You win!");
            $('#play')[0].src = "https://www.youtube.com/embed/nmEV-5DYQMs?autoplay=1";
                reset();
        }else if (counter > computer) {
            loss++;
            $("#loss").text(loss);
            $("#message").text("You lost!");
            $('#play')[0].src = "https://www.youtube.com/embed/04rbYbob3Rg?autoplay=1";
            reset();
        }
    });
});