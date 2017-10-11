console.log('javascript file loaded');

var sendRequest = function() {
  // Getting the values of the text fields
  var name = document.getElementById('name');
  var groupNo = document.getElementById('groupNo');
  var email = document.getElementById('email');

  // Preparing request
  var requestObject = new XMLHttpRequest();

  // Setup event listener
  requestObject.onreadystatechange = onResponse;

  // Setup the request and preparing data
  //requestObject.open('POST', 'http://httpbin.org/post', true);
  requestObject.open('POST', 'http://192.168.0.100:9000/testapiendpoint/post/', true);
  requestObject.setRequestHeader('Content-Type', 'application/json');

  // Sending the request
  requestObject.send(
    JSON.stringify({ name: name.value, email: email.value, groupNo: groupNo.value })
  );
};

var reset = function() {
  var name = document.getElementById('name');
  var groupNo = document.getElementById('groupNo');
  var email = document.getElementById('email');
  name.value = '';
  groupNo.value = '';
  email.value = '';
};

var onResponse = function() {
  console.log('response recieved');
  if (this.readyState == 4 && this.status == 200) {
    console.log('response OK');
    console.log(this.responseText);
  }
};
