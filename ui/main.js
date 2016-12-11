
window.onload = function() {
var register = document.getElementById('send_mail');
register.onclick = function () {
    // Create a request object
    var request = new XMLHttpRequest();

    // Capture the response and store it in a variable
    request.onreadystatechange = function () {
      if (request.readyState === XMLHttpRequest.DONE) {
          // Take some action
          if (request.status === 200) {
              console.log('sucsess!')
              register.value = 'Registered!';
          } else {
              console.log('try again');
              register.value = 'Register';
          }
      }
    };

    // Make the request
    var email = document.getElementById('email1').value;
    console.log(email);
    request.open('POST', '/create-user', true);
    request.setRequestHeader('Content-Type', 'application/json');
    console.log(JSON.stringify({email: email}));
    request.send(JSON.stringify({email: email}));
    register.value = 'Registering...';

    return false;
};
}

var counter = document.getElementById('counter');

if (counter) {
	var req = new XMLHttpRequest();
	req.onreadystatechange = function(){
		if(req.readyState === XMLHttpRequest.DONE && req.status === 200) {
			var count = req.responseText;
			var counter = document.getElementById('counter');
			counter.innerHTML = count.toString();
		}
	};
	req.open("GET","/counter", true);
	req.send(null);
}
