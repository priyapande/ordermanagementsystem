var store=window.localStorage;

function check_loggedIn() {
  if(store.client_code)
    window.location.href;
}

function submit_by_id() {
  var name = document.getElementById("login-username").value;
  var password = document.getElementById("login-password").value;

  var loginObject = {
    clientCode: name,
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
        var response = JSON.parse(xhttp.responseText);
        console.log(xhttp.responseText);
        //console.log(response);
        store.setItem("client_code",response.code);
        //console.log(store);
        window.location='../templates/dashboard.html';
      }
  };
}

function logout() {
  localStorage.clear();
  var url = '../templates/login.html';
  var l=window.history.go(-window.history.length);

  window.location.href = url;
  //  console.log(window.localStorage);
}
