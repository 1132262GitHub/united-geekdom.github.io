var score = 1;
function game() {
var word = ["blue","red","green","orange","purple","pink"];
var colour = ["blue","red","green","orange","purple","pink"];
var word1 = Math.floor(Math.random() * 5) + 1;
var color1;
do {
color1 = Math.floor(Math.random() * 5) + 1;
}  while (color1 == word1);
document.getElementById("a").style.color = colour[color1];
document.getElementById("a").innerHTML = word[word1];
if (Math.floor(Math.random() * 2) == 0) {
	document.getElementById("b").innerHTML = "<button onclick='yes()'>" + colour[color1] + "</button>" + "<button onclick='no()'>" + word[word1] + "</button>";
} else {
		document.getElementById("b").innerHTML = "<button onclick='no()'>" + word[word1] + "</button>" + "<button onclick='yes()'>" + colour[color1] + "</button>";
}
	}
function no() {
	document.getElementById("c").style.color = "red";
	document.getElementById("c").innerHTML = "wrong";
document.getElementById("colourScore").innerHTML = score;	
		score--;
	game()
}
function yes() {
	document.getElementById("c").style.color = "green";
	document.getElementById("c").innerHTML = "Correct!";
	document.getElementById("colourScore").innerHTML = score;
	score++;
	game()
}