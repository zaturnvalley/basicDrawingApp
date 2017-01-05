(function(){
  // Grab canvas by id
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  var radius = 10;
  var dragging = false;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  function putPoint(e) {
    if(dragging){
      context.lineTo(e.clientX, e.clientY);
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
  }
  // Dragging activated on mousedown
  canvas.addEventListener('mousedown', engage);
  // Dragging deactivated on mouseup
  canvas.addEventListener('mouseup', disengage);
  // On mouse down, putPoint fires
  canvas.addEventListener('mousemove', putPoint);

  // // Grab buttons
  // var bigger = document.getElementById('bigger');
  // var smaller = document.getElementById('smaller');
  // var normal = document.getElementById('normal');

  // // Event Listeners for buttons
  // bigger.addEventListener('click', radiusSize(15));
  // smaller.addEventListener('click', radiusSize(5));
  // normal.addEventListener('click', radiusSize(10));

  // function radiusSize(radius){
  //   return radius;
  // }

})();