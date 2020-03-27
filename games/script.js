function rock() {
var set = Math.floor(Math.random() * 9);
var choice;
var choiceAlt;
var rock = "rock.jpg";
var paper = "paper.jpg";
var scissors = "scissors.jpg";
if (set < 3) {
choice = rock;
choiceAlt = "rock";
document.getElementById("score").innerHTML = "Draw";
} else if (set < 6) {
choice = paper;
choiceAlt = "paper";
document.getElementById("score").innerHTML = "You lose";
} else {
choice = scissors;
choiceAlt = "scissors";
document.getElementById("score").innerHTML = "You win";
}
document.getElementById("myChoice").src = choice;
document.getElementById("myChoice").alt = choiceAlt;
}
function paper() {
var set = Math.floor(Math.random() * 9);
var choice;
var choiceAlt;
var rock = "rock.jpg";
var paper = "paper.jpg";
var scissors = "scissors.jpg";
if (set < 3) {
choice = rock;
choiceAlt = "rock";
document.getElementById("score").innerHTML = "You win";
} else if (set < 6) {
choice = paper;
choiceAlt = "paper";
document.getElementById("score").innerHTML = "Draw";
} else {
choice = scissors;
choiceAlt = "scissors";
document.getElementById("score").innerHTML = "You lose";
}
document.getElementById("myChoice").src = choice;
document.getElementById("myChoice").alt = choiceAlt;
}
function scissors() {
var set = Math.floor(Math.random() * 9);
var choice;
var choiceAlt;
var rock = "rock.jpg";
var paper = "paper.jpg";
var scissors = "scissors.jpg";
if (set < 3) {
choice = rock;
choiceAlt = "rock";
document.getElementById("score").innerHTML = "You lose";
} else if (set < 6) {
choice = paper;
choiceAlt = "paper";
document.getElementById("score").innerHTML = "You win";
} else {
choice = scissors;
choiceAlt = "scissors";
document.getElementById("score").innerHTML = "Draw";
}
document.getElementById("myChoice").src = choice;
document.getElementById("myChoice").alt = choiceAlt;
}