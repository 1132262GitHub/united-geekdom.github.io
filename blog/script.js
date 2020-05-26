function darkMode() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("disappear").style.display = "none";
        document.getElementById("hr").style.display = "none";
  } else {
    document.getElementById("disappear").style.display = "block";
            document.getElementById("hr").style.display = "block";
  }
}
function newPage() {
var month = document.getElementById("month").value;
var year = document.getElementById("year").value;
window.location = "../../" + year + month;
}