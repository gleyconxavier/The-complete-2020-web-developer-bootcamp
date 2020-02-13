const buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

let started = false;
let level = 0;

function playAudio(currentColour) {
    const audio = new Audio('sounds/'+currentColour+'.mp3');
    audio.play();
};

function fadeButton(currentColour) {
    return $("#" + currentColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
};

function animatePress(currentColour) {
    return $("#" + currentColour).addClass("pressed");
};

function startOver() {
    level = [];
    gamePattern = [];
    started = false;
}

function nextSequence() {
    userClickedPattern = [];
    level++;
    $('#level-title').text('Level '+level);
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    playAudio(randomChosenColour);
    fadeButton(randomChosenColour);
};

function checkAnswer(currentLevel) {
    
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if(userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
              }, 1000);
        }
    } else {
        $('body').addClass("game-over");
        setTimeout(function() {
            $('body').removeClass("game-over");
        }, 200);
        playAudio('wrong');
        $('#level-title').text("Game Over, Press Any Key to Restart");
        startOver();
    };
}

function userChosenColour(currentColour) {
    playAudio(currentColour);
    animatePress(currentColour);
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    }, 100);
    userClickedPattern.push(currentColour);
};

$('body').keypress(function(){
    if(!started){
        nextSequence();
        started = true;
    }
});
$('.btn').click(function(){
    color = this.id;
    userChosenColour(this.id);
    checkAnswer(userClickedPattern.length-1);
    }
);