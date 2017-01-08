// Grab save 
var saveButton = document.getElementById('save');

// Event listener fires saveImage on click
saveButton.addEventListener('click', saveImage);

function saveImage() {
  var data = canvas.toDataUrl();
}