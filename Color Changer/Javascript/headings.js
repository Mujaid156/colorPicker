var colorHead;
var defaultColor = "#ff0000";

window.addEventListener("load", text, false);

function text() {
    colorHead = document.querySelector("#colorHead");
    colorHead.value = defaultColor;
    colorHead.addEventListener("input", HeadFirst, false);
    colorHead.addEventListener("change", HeadAll, false);
    colorHead.select();
  }
  
function HeadFirst(event) {
    var p = document.querySelector(".head");
    if (p) {
      p.style.color = event.target.value;
    }
  }
  function headAll(event) {
    document.querySelectorAll(".head").forEach(function(p) {
        console.log(p, event.target.value)
      p.style.color = event.target.value;
    });
  }