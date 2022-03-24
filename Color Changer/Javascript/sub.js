var colorSub;
var defaultColor = "#ff0000";

window.addEventListener("load", text, false);

function text() {
    colorSub = document.querySelector("#colorSub");
    colorSub.value = defaultColor;
    colorSub.addEventListener("input", subFirst, false);
    colorSub.addEventListener("change", subAll, false);
    colorSub.select();
  }
  
function subFirst(event) {
    var p = document.querySelector(".sub");
    if (p) {
      p.style.color = event.target.value;
    }
  }
  function subAll(event) {
    document.querySelectorAll(".sub").forEach(function(p) {
        console.log(p, event.target.value)
      p.style.color = event.target.value;
    });
  }