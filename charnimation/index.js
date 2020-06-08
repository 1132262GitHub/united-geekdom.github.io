setInterval(loadChars, 2000);
function loadChars() {
timedText(); 
timedText2();
timedText3();
timedText4();
timedText5();
timedText6();
timedText7();
}
function timedText() {
  setTimeout(myTimeout1, 500) 
  setTimeout(myTimeout2, 1000) 
  setTimeout(myTimeout3, 1500) 
  setTimeout(myTimeout4, 2000)
}
function myTimeout1() {
var a= "\\O/"
var b= " " + "|"
var c= "/ \\"
var d= "<pre>" + "<pre>" + a + "<br>" + b + "<BR>" + c + "</pre>" + "</pre>"
  document.getElementById("jumpJack").innerHTML = d;
}
function myTimeout2() {
var a= "_O_"
var b= " "+  "|"
var c= "/ \\"
var d = "<pre>" + a + "<br>" + b + "<br>" + c + "</pre>"
  document.getElementById("jumpJack").innerHTML = d;
}  
function myTimeout3() {
var a= " O"
var b= "/"+  "|" + "\\"
var c= "/ \\"
var d = "<pre>" + a + "<br>" + b + "<br>" + c + "</pre>"
  document.getElementById("jumpJack").innerHTML = d;
}
function myTimeout4() {
var a= "_O_"
var b= " "+  "|"
var c= "/ \\"
var d = "<pre>" + a + "<br>" + b + "<br>" + c + "</pre>"
  document.getElementById("jumpJack").innerHTML = d;
}
function timedText2() {
  setTimeout(myTimeout5, 250) 
  setTimeout(myTimeout6, 500) 
  setTimeout(myTimeout7, 750) 
  setTimeout(myTimeout8, 1000)
  setTimeout(myTimeout5, 1250) 
  setTimeout(myTimeout6, 1500) 
  setTimeout(myTimeout7, 1750) 
  setTimeout(myTimeout8, 2000)
}

function myTimeout5() {
  document.getElementById("load").innerHTML = " |";
}
function myTimeout6() {
  document.getElementById("load").innerHTML = " /";
}  
function myTimeout7() {
  document.getElementById("load").innerHTML = "-";
}
function myTimeout8() {
  document.getElementById("load").innerHTML = " \\";
}
function timedText3() {
  setTimeout(myTimeout9, 125) 
  setTimeout(myTimeout10, 250) 
  setTimeout(myTimeout11, 375) 
  setTimeout(myTimeout12, 500)
  setTimeout(myTimeout13, 625) 
  setTimeout(myTimeout12, 750) 
  setTimeout(myTimeout11, 875) 
  setTimeout(myTimeout10, 1000)
  setTimeout(myTimeout9, 1125) 
  setTimeout(myTimeout10, 1250) 
  setTimeout(myTimeout11, 1375) 
  setTimeout(myTimeout12, 1500)
  setTimeout(myTimeout13, 1625) 
  setTimeout(myTimeout12, 1750) 
  setTimeout(myTimeout11, 1875) 
  setTimeout(myTimeout10, 2000)
}
function myTimeout9() {
var a= "   O"
var b= "  " + "/|\\"
var c= " / | \\o"
var d= "  / \\"
var e= "  | |"
var f= "<pre>" + a + "<br>" + b + "<BR>" + c + "<BR>" + d  + "<BR>" + e + "</pre>"
  document.getElementById("bBall").innerHTML = f;
}
function myTimeout10() {
var a= "   O"
var b= "  " + "/|\\"
var c= " / | \\"
var d= "  / \\o"
var e= "  | |"
var f= "<pre>" + a + "<br>" + b + "<BR>" + c + "<BR>" + d  + "<BR>" + e + "</pre>"
  document.getElementById("bBall").innerHTML = f;
}
function myTimeout11() {
var a= "   O"
var b= "  " + "/|\\"
var c= " / | \\"
var d= "  / \\"
var e= "  |<u>o</u>|"
var f= "<pre>" + a + "<br>" + b + "<BR>" + c + "<BR>" + d  + "<BR>" + e + "</pre>"
  document.getElementById("bBall").innerHTML = f;
}
function myTimeout12() {
var a= "   O"
var b= "  " + "/|\\"
var c= " / | \\"
var d= " o/ \\"
var e= "  | |"
var f= "<pre>" + a + "<br>" + b + "<BR>" + c + "<BR>" + d + "<BR>" + e + "</pre>"
  document.getElementById("bBall").innerHTML = f;
}
function myTimeout13() {
var a= "   O"
var b= "  " + "/|\\"
var c= "o/ | \\"
var d= "  / \\"
var e= "  | |"
var f= "<pre>" + a + "<br>" + b + "<BR>" + c + "<BR>" + d  + "<BR>" + e + "</pre>"
  document.getElementById("bBall").innerHTML = f;
}
function timedText4() {
  setTimeout(myTimeout14, 100) 
  setTimeout(myTimeout15, 200) 
  setTimeout(myTimeout16, 300) 
  setTimeout(myTimeout17, 400)
  setTimeout(myTimeout18, 500) 
  setTimeout(myTimeout19, 600)
  setTimeout(myTimeout14, 700) 
  setTimeout(myTimeout15, 800) 
  setTimeout(myTimeout16, 900) 
  setTimeout(myTimeout17, 1000)
  setTimeout(myTimeout18, 1100) 
  setTimeout(myTimeout19, 1200)
  setTimeout(myTimeout14, 1300) 
  setTimeout(myTimeout15, 1400) 
  setTimeout(myTimeout16, 1500) 
  setTimeout(myTimeout17, 1600)
  setTimeout(myTimeout18, 1700) 
  setTimeout(myTimeout19, 1800)
  setTimeout(myTimeout19, 2000)  
}
function myTimeout14() {
var a = "&nbsp&nbsp&nbspO/";
var b = "#==|";
var c = "&nbsp&nbsp/ \\";
var d = "<pre>" + a + "<BR>" + b + "<BR>" + c + "</pre>";
document.getElementById("pete").innerHTML = d;
}
function myTimeout15() {
var a = "&nbsp&nbsp&nbspO_";
var b = "#==|";
var c = "&nbsp&nbsp/ \\";
var d = "<pre>" + a + "<BR>" + b + "<BR>" + c + "</pre>";
document.getElementById("pete").innerHTML = d;
}
function myTimeout16() {
var a = "&nbsp&nbsp&nbspO";
var b = "#==|\\";
var c = "&nbsp&nbsp/ \\";
var d = "<pre>" + a + "<BR>" + b + "<BR>" + c + "</pre>";
document.getElementById("pete").innerHTML = d;
}
function myTimeout17() {
var a = "&nbsp&nbsp&nbspO";
var b = "#=/|";
var c = "&nbsp&nbsp/ \\";
var d = "<pre>" + a + "<BR>" + b + "<BR>" + c + "</pre>";
document.getElementById("pete").innerHTML = d;
}
function myTimeout18() {
var a = "&nbsp&nbsp_O";
var b = "#==|";
var c = "&nbsp&nbsp/ \\";
var d = "<pre>" + a + "<BR>" + b + "<BR>" + c + "</pre>";
document.getElementById("pete").innerHTML = d;
}
function myTimeout19() {
var a = "&nbsp&nbsp\\O";
var b = "#==|";
var c = "&nbsp&nbsp/ \\";
var d = "<pre>" + a + "<BR>" + b + "<BR>" + c + "</pre>";
document.getElementById("pete").innerHTML = d;
}
function timedText5() {
  setTimeout(myTimeout20, 125) 
  setTimeout(myTimeout21, 250) 
  setTimeout(myTimeout22, 375) 
  setTimeout(myTimeout23, 500)
  setTimeout(myTimeout24, 625) 
  setTimeout(myTimeout23, 750)
  setTimeout(myTimeout22, 875) 
  setTimeout(myTimeout21, 1000) 
  setTimeout(myTimeout20, 1125) 
  setTimeout(myTimeout21, 1250) 
  setTimeout(myTimeout22, 1375) 
  setTimeout(myTimeout23, 1500)
  setTimeout(myTimeout24, 1625) 
  setTimeout(myTimeout23, 1750)
  setTimeout(myTimeout22, 1875) 
  setTimeout(myTimeout21, 2000) 
}
function myTimeout20() {
var a = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+"o|";
var b = "|___<u>|</u>___";
var c = "<pre>" + a + "<BR>"+ b + "</pre>";
document.getElementById("tTpP").innerHTML = c;
}
function myTimeout21() {
var a = "&nbsp&nbsp&nbsp&nbsp&nbsp";
var b = "|___<u>|</u>_<u>o</u>_|";
var c = "<pre>" + a + "<BR>"+ b + "</pre>";
document.getElementById("tTpP").innerHTML = c;
}
function myTimeout22() {
var a = "&nbsp&nbsp&nbsp&nbsp"+"o";
var b = "|___<u>|</u>___|";
var c = "<pre>" + a + "<BR>"+ b + "</pre>";
document.getElementById("tTpP").innerHTML = c;
}
function myTimeout23() {
var a = "&nbsp&nbsp&nbsp&nbsp&nbsp";
var b = "|_<u>o</u>_<u>|</u>___|";
var c = "<pre>" + a + "<BR>"+ b + "</pre>";
document.getElementById("tTpP").innerHTML = c;
}
function myTimeout24() {
var a = "|o"+"&nbsp&nbsp&nbsp&nbsp";
var b = "&nbsp___<u>|</u>___|";
var c = "<pre>" + a + "<BR>"+ b + "</pre>";
document.getElementById("tTpP").innerHTML = c;
}
function timedText6() {
  setTimeout(myTimeout25, 500) 
  setTimeout(myTimeout26, 1000) 
  setTimeout(myTimeout25, 1500) 
  setTimeout(myTimeout27, 2000)
}
function myTimeout25() {
var a= " "
var b= "   O"
var c= "  " + "/|\\"
var d= " / | \\"
var e= "  / \\"
var f= "  | |"
var g= "<pre>" + a + "<br>" + b + "<BR>" + c + "<BR>" + d  + "<BR>" + e + "<BR>" + f + "</pre>";
  document.getElementById("dab").innerHTML = g;
}
function myTimeout26() {
var a= "     /"
var b= "  <u>/</u>o/"
var c= "  " + " |"
var d= "   |"
var e= "  / \\"
var f= "  | |"
var g= "<pre>" + a + "<br>" + b + "<BR>" + c + "<BR>" + d  + "<BR>" + e + "<BR>" + f + "</pre>";
  document.getElementById("dab").innerHTML = g;
}
function myTimeout27() {
var a= " \\  "
var b= "  \\o<u>\\</u>"
var c= "  " + " |"
var d= "   |"
var e= "  / \\"
var f= "  | |"
var g= "<pre>" + a + "<br>" + b + "<BR>" + c + "<BR>" + d + "<BR>" + e + "<BR>" + f + "</pre>";
  document.getElementById("dab").innerHTML = g;
}
function timedText7() {
  setTimeout(myTimeout28, 250) 
  setTimeout(myTimeout29, 500) 
  setTimeout(myTimeout30, 750) 
  setTimeout(myTimeout31, 1000)
  setTimeout(myTimeout32, 1250) 
  setTimeout(myTimeout33, 1500) 
  setTimeout(myTimeout34, 1750) 
  setTimeout(myTimeout35, 2000)
}
function myTimeout28() {
var a= " "
var b= "   O"
var c= "  |||"
var d= "  |||"
var e= "   |"
var f= "   |"
var g= "<pre>" + a + "<br>" + b + "<BR>" + c + "<BR>" + d  + "<BR>" + e + "<BR>" + f + "</pre>";
  document.getElementById("bkFwrd").innerHTML = g;
}
function myTimeout29() {
var a= " "
var b= "   O"
var c= "  /|\\"
var d= " / |_\\"
var e= "   ||"
var f= "   |"
var g= "<pre>" + a + "<br>" + b + "<BR>" + c + "<BR>" + d + "<BR>" + e + "<BR>" + f + "</pre>";
  document.getElementById("bkFwrd").innerHTML = g;
}
function myTimeout30() {
var a= " "
var b= "   O"
var c= "  /|\\"
var d= " / | \\"
var e= "   |\\"
var f= "   ||"
var g= "<pre>" + a + "<br>" + b + "<BR>" + c + "<BR>" + d + "<BR>" + e + "<BR>" + f + "</pre>";
  document.getElementById("bkFwrd").innerHTML = g;
}
function myTimeout31() {
var a= " "
var b= "   O"
var c= "  |||"
var d= "  |||"
var e= "   /\\"
var f= "  /  \\"
var g= "<pre>" + a + "<br>" + b + "<BR>" + c + "<BR>" + d + "<BR>" + e + "<BR>" + f + "</pre>";
  document.getElementById("bkFwrd").innerHTML = g;
}
function myTimeout32() {
var a= "  "
var b= "    O"
var c= "   |||"
var d= "   |||"
var e= "    |"
var f= "    |"
var g= "<pre>" + a + "<br>" + b + "<BR>" + c + "<BR>" + d + "<BR>" + e + "<BR>" + f + "</pre>";
  document.getElementById("bkFwrd").innerHTML = g;
}
function myTimeout33() {
var a= "  "
var b= "    O"
var c= "   /|\\"
var d= "  /_| \\"
var e= "   ||"
var f= "    |"
var g= "<pre>" + a + "<br>" + b + "<BR>" + c + "<BR>" + d + "<BR>" + e + "<BR>" + f + "</pre>";
  document.getElementById("bkFwrd").innerHTML = g;
}
function myTimeout34() {
var a= "  "
var b= "    O"
var c= "   /|\\"
var d= "  / | \\"
var e= "   /|"
var f= "   ||"
var g= "<pre>" + a + "<br>" + b + "<BR>" + c + "<BR>" + d + "<BR>" + e + "<BR>" + f + "</pre>";
  document.getElementById("bkFwrd").innerHTML = g;
}
function myTimeout35() {
var a= " "
var b= "    O"
var c= "   |||"
var d= "   |||"
var e= "   /\\"
var f= "  /  \\"
var g= "<pre>" + a + "<br>" + b + "<BR>" + c + "<BR>" + d + "<BR>" + e + "<BR>" + f + "</pre>";
  document.getElementById("bkFwrd").innerHTML = g;
}
setInterval(loadCHARs, 8000)
function loadCHARs() {
IItimedText(); 
}
function IItimedText() {
  setTimeout(IImyTimeout1, 800) 
  setTimeout(IImyTimeout2, 1600) 
  setTimeout(IImyTimeout3, 2400) 
  setTimeout(IImyTimeout4, 3200)
  setTimeout(IImyTimeout5, 4000) 
  setTimeout(IImyTimeout6, 4800) 
  setTimeout(IImyTimeout7, 5600) 
  setTimeout(IImyTimeout8, 6400)
  setTimeout(IImyTimeout9, 7200) 
  setTimeout(IImyTimeout10, 8000)
}
function IImyTimeout1() {
var a= "<font size=2></font>"
var b= "<font size=3></font>"
var c= "<font size=4></font>"
var d= "<font size=5></font>"
var e= "<font size=6></font>"
var f= "<center>" + a + "<BR>" + b + "<BR>" + c + "<BR>" + d + "<BR>" + e + "<BR>" + "<center>";
  document.getElementById("CHARwars").innerHTML = "<pre>" + f + "</pre>";
}

function IImyTimeout2() {
var a= "<font size=2></font>"
var b= "<font size=3></font>"
var c= "<font size=4></font>"
var d= "<font size=5></font>"
var e= "<font size=6><h3>CHARnimation Number V: The Geekdom Strikes Back! (at what?)<h3></font>"
var f= "<center>" + a + "<BR>" + b + "<BR>" + c + "<BR>" + d + "<BR>" + e + "<BR>" + "<center>";
  document.getElementById("CHARwars").innerHTML = "<pre>" + f + "</pre>";
}
function IImyTimeout3() {
var a= "<font size=2></font>"
var b= "<font size=3></font>"
var c= "<font size=4></font>"
var d= "<font size=5><h3>CHARnimation Number V: The Geekdom Strikes Back! (at what?)<h3></font>"
var e= "<font size=6>Having seen the new Star Wars, I just had to CHARnimate the</font>"
var f= "<center>" + a + "<BR>" + b + "<BR>" + c + "<BR>" + d + "<BR>" + e + "<BR>" + "<center>";
  document.getElementById("CHARwars").innerHTML = "<pre>" + f + "</pre>";
}

function IImyTimeout4() {
var a= "<font size=2></font>"
var b= "<font size=3></font>"
var c= "<font size=4><h3>CHARnimation Number V: The Geekdom Strikes Back! (at what?)<h3></font>"
var d= "<font size=5>Having seen the new Star Wars, I just had to CHARnimate the</font>"
var e= "<font size=6>intro. While I may not be able to create the scroll effect,</font>"
var f= "<center>" + a + "<BR>" + b + "<BR>" + c + "<BR>" + d + "<BR>" + e + "<BR>" + "<center>";
  document.getElementById("CHARwars").innerHTML = "<pre>" + f + "</pre>";
}

function IImyTimeout5() {
var a= "<font size=2></font>"
var b= "<font size=3><h3>CHARnimation Number V: The Geekdom Strikes Back! (at what?)<h3></font>"
var c= "<font size=4>Having seen the new Star Wars, I just had to CHARnimate the</font>"
var d= "<font size=5>intro. While I may not be able to create the scroll effect,</font>"
var e= "<font size=6>I can make the text fade into the distance using font size.</font>"
var f= "<center>" + a + "<BR>" + b + "<BR>" + c + "<BR>" + d + "<BR>" + e + "<BR>" + "<center>";
  document.getElementById("CHARwars").innerHTML = "<pre>" + f + "</pre>";
}

function IImyTimeout6() {
var a= "<font size=2><h3>CHARnimation Number V: The Geekdom Strikes Back! (at what?)<h3></font>"
var b= "<font size=3>Having seen the new Star Wars, I just had to CHARnimate the</font>"
var c= "<font size=4>intro. While I may not be able to create the scroll effect,</font>"
var d= "<font size=5>I can make the text fade into the distance using font size.</font>"
var e= "<font size=6>I hope you enjoy this special CHARnimation, as it was hard.</font>"
var f= "<center>" + a + "<BR>" + b + "<BR>" + c + "<BR>" + d + "<BR>" + e + "<BR>" + "<center>";
  document.getElementById("CHARwars").innerHTML = "<pre>" + f + "</pre>";
}

function IImyTimeout7() {
var a= "<font size=2>Having seen the new Star Wars, I just had to CHARnimate the</font>"
var b= "<font size=3>intro. While I may not be able to create the scroll effect,</font>"
var c= "<font size=4>I can make the text fade into the distance using font size.</font>"
var d= "<font size=5>I hope you enjoy this special CHARnimation, as it was hard.</font>"
var e= "<font size=6></font>"
var f= "<center>" + a + "<BR>" + b + "<BR>" + c + "<BR>" + d + "<BR>" + e + "<BR>" + "<center>";
  document.getElementById("CHARwars").innerHTML = "<pre>" + f + "</pre>";
}

function IImyTimeout8() {
var a= "<font size=2>intro. While I may not be able to create the scroll effect,</font>"
var b= "<font size=3>I can make the text fade into the distance using font size.</font>"
var c= "<font size=4>I hope you enjoy this special CHARnimation, as it was hard.</font>"
var d= "<font size=5></font>"
var e= "<font size=6></font>"
var f= "<center>" + a + "<BR>" + b + "<BR>" + c + "<BR>" + d + "<BR>" + e + "<BR>" + "<center>";
  document.getElementById("CHARwars").innerHTML = "<pre>" + f + "</pre>";
}

function IImyTimeout9() {
var a= "<font size=2>I can make the text fade into the distance using font size.</font>"
var b= "<font size=3>I hope you enjoy this special CHARnimation, as it was hard.</font>"
var c= "<font size=4></font>"
var d= "<font size=5></font>"
var e= "<font size=6></font>"
var f= "<center>" + a + "<BR>" + b + "<BR>" + c + "<BR>" + d + "<BR>" + e + "<BR>" + "<center>";
  document.getElementById("CHARwars").innerHTML = "<pre>" + f + "</pre>";
}

function IImyTimeout10() {
var a= "<font size=2>I hope you enjoy this special CHARnimation, as it was hard.</font>"
var b= "<font size=3></font>"
var c= "<font size=4></font>"
var d= "<font size=5></font>"
var e= "<font size=6></font>"
var f= "<center>" + a + "<BR>" + b + "<BR>" + c + "<BR>" + d + "<BR>" + e + "<BR>" + "<center>";
  document.getElementById("CHARwars").innerHTML = "<pre>" + f + "</pre>";
}         	                                                                                            