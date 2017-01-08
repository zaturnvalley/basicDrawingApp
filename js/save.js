// Grab save 
var saveButton = document.getElementById('save');

// Event listener fires saveImage on click
saveButton.addEventListener('click', saveImage);

function saveImage() {
  var data = canvas.toDataURL();

  // takes 3 parameters: window.open(url, name, options);
  window.open(data, '_blank', 'location=0, menubar=0');
  console.log('done')
}