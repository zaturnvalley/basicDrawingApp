(function(){
  // Grab canvas by id
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  var radius = 10;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  function putPoint(e) {
    context.beginPath();

    // These are the arc method's parameters:
    // context.arc(x, y, radius, start, end, rotate (true or false));

    // This will build a full circle using starting at 0 and going to 2 PI
    context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);

    // This will fill the circle fully
    context.fill();
  }

  // On mouse down, putPoint fires
  canvas.addEventListener('mousedown', putPoint);

})();