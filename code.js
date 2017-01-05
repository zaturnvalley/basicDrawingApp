(function(){
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  function putPoint(e) {
    context.arc();
  }

  canvas.addEventListener('mousedown', putPoint);

})()