var colorWell;
var defaultColor = "#ff0000";

window.addEventListener("load", text, false);

function text() {
    colorWell = document.querySelector("#colorWell");
    colorWell.value = defaultColor;
    colorWell.addEventListener("input", textFirst, false);
    colorWell.addEventListener("change", textAll, false);
    colorWell.select();
  }
  
function textFirst(event) {
    var p = document.querySelector(".color");
    if (p) {
      p.style.color = event.target.value;
    }
  }
  function textAll(event) {
    document.querySelectorAll(".color").forEach(function(p) {
        console.log(p, event.target.value)
      p.style.color = event.target.value;
    });
  }
    
