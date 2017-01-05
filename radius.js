// Sets new radius to value passed in
function setRadius(newRadius) {
  if(newRadius < minRad) {
    newRadius = minRad;
  } else if (newRadius > maxRad) {
    newRadius = maxRad;
  }
  radius = newRadius;
  context.lineWidth = radius * 2;

  // Changes innerHTML to equal new Radius
  radSpan.innerHTML = radius;
}

// Set Vars, grab elems
var minRad = 0.5,
    maxRad = 100,
    defaultRad = 20,
    interval = 5,
    radSpan = document.getElementById('radVal'),
    decRad = document.getElementById('decRad'),
    incRad = document.getElementById('incRad');

// Click Event for decRad
decRad.addEventListener('click', function(){
  setRadius(radius-interval);
});

// Click Event for incRad
incRad.addEventListener('click', function(){
  setRadius(radius+interval);
});