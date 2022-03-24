var colorPicker;
var defaultColor = "#0000ff";

window.addEventListener("load", startup, false);

function startup() {
    colorPicker = document.querySelector("#colorpicker");
    colorPicker.value = defaultColor;
    colorPicker.addEventListener("input", updateFirst, false);
    colorPicker.addEventListener("change", updateAll, false);
    colorPicker.select();
  }
  
function updateFirst(event) {
    var body = document.querySelector("body");
  
    if (body) {
      body.style.backgroundColor = event.target.value;
    }
  }
  function updateAll(event) {
    document.querySelectorAll("body").forEach(function(body) {
        console.log(body, event.target.value)

      body.style.backgroundColor = event.target.value;
    });
  }
    