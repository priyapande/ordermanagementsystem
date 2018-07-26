function submit_by_id() {
var name = document.getElementById("login-username").value;
var password = document.getElementById("login-password").value;

var loginObject = {
  clientcode: name,
  password: password
};

var xhttp = new XMLHttpRequest();
var url = "http://192.168.43.34:7887/login"

xhttp.open("post", url, true);
xhttp.setRequestHeader('Content-Type','application/json');
xhttp.send(JSON.stringify(loginObject));

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       console.log(xhttp.responseText);
    }
};
}
