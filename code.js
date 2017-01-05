(function(){
  // Grab canvas by id
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  var radius = 10;
  var dragging = false;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Sets line to twice radius (full diameter)
  context.lineWidth = radius * 2 ;

  function putPoint(e) {
    if(dragging){
      // Line connects to dots
      context.lineTo(e.clientX, e.clientY);
      context.stroke();
      context.beginPath();

      // These are the arc method's parameters:
      // context.arc(x, y, radius, start, end, rotate (true or false));

      // This will build a full circle using starting at 0 and going to 2 PI
      context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);

      // This will fill the circle fully
      context.fill();

      // Establish Path, move to beginning
      context.beginPath();
      context.moveTo(e.clientX, e.clientY);

    }
  }
  // Function sets dragging to true
  function engage(e){
    dragging = true;
    putPoint(e);
  }
  // Function sets dragging to false
  function disengage(){
    dragging = false;

    // When done drawing, do not connect, begin anew
    context.beginPath();
  }
  // Dragging activated on mousedown
  canvas.addEventListener('mousedown', engage);
  // Dragging deactivated on mouseup
  canvas.addEventListener('mouseup', disengage);
  // On mouse down, putPoint fires
  canvas.addEventListener('mousemove', putPoint);

})();