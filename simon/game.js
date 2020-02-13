const gamePattern = [];
const userClickedPattern = [];
const buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
    return Math.floor(Math.random() * 4);
};

function playAudio(e) {
    const audio = new Audio('sounds/'+e+'.mp3');
    audio.play();
}

function userChosenColour(color) {
    console.log('Cor clickada: ', color, ' pattern atual: ', userClickedPattern);
    return userClickedPattern.push(color);
}

const randomNumber = nextSequence();
const randomChosenColour = buttonColours[randomNumber];
gamePattern.push(randomChosenColour);

$("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
$('.btn').click(userChosenColour(this.id));