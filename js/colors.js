// Grab array of all elems with class swatch
var swatches = document.getElementsbyClassName('swatch');

// Loop over array, cache value of n
for (var i = 0; n = swatches.length; i < n; i++) {
  swatches[i].addEventListener('click', setSwatch)
}

// Sets color
function setColor(color) {
  context.fillStyle = color;
  context.strokeStyle = color;
  var active = document.getElementsbyClassName('active')[0];
  if (active) {
    active.className = 'swatch';
  }
}

function setSwatch(e){
  // Identify Swatch
  var swatch = e.target;

  // Set Color
  setColor(swatch.style.backgroundColor);
  // Give active class
}