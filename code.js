(function(){
  // grab canvas by id
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  var radius = 10;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  function putPoint(e) {
    context.beginPath();

    // these are the arc parameters
    // context.arc(x, y, radius, start, end, rotate (true or false));

    // this will build a full circle using starting at 0 and going to 2 PI
    context.arc(e.offsetX, e.offsetY, radius, 0, Math.PI*2)
  }

  // on mouse down, putPoint fires
  canvas.addEventListener('mousedown', putPoint);

})()