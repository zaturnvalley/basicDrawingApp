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