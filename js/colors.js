// Array of colors
var colors = ['black', 'grey', 'white', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'pink']

// Create color divs dynammically
for (var i = 0, n = colors.length; i<n; i++) {
  var swatch = document.createElement('div');
  swatch.className = 'swatch';
  swatch.style.backgroundColor = colors[i];
  swatch.addEventListener('click', setSwatch);
  document.getElementById('colors').appendChild(swatch);
}

// Sets color
function setColor(color) {
  context.fillStyle = color;
  context.strokeStyle = color;
  var active = document.getElementsByClassName('active')[0];
  if (active) {
    // omit active 
    active.className = 'swatch';
  }
}

function setSwatch(e){
  // Identify Swatch
  var swatch = e.target;

  // Set Color
  setColor(swatch.style.backgroundColor);

  // Give active class via appending to class
  swatch.className = 'swatch active';
}