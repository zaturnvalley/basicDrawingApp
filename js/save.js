// Grab save 
var saveButton = document.getElementById('save');

// Event listener fires saveImage on click
saveButton.addEventListener('click', saveImage);

function saveImage() {
  var data = canvas.toDataURL();

  // Takes 3 parameters: window.open(url, name, options);
  // Would be done like so, but will use ajax and php
  // window.open(data, '_blank', 'location=0, menubar=0');

  var request = new XMLHttpRequest();

  request.onreadystatechange = function() {
    if(request.readyState == 4 && request.status == 200) {
      // do response
      var response = request.responseText;
      window.open(response, '_blank', 'location=0, menubar=0')
    }
  }

  // true is a boolean for synchronus 
  request.open('POST', 'save.php', true);
  request.setRequestHeader('Content-type','application/x-www-form-urlencoded');
  request.send('img='+data);
}