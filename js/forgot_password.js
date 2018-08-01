function set_password()
{
    var client_code=document.getElementById("client_code").value;
    var client_phone=document.getElementById("client_phone").value;
    var client_password=document.getElementById("new_password").value;

    var loginObject = {
        clientCode: client_code,
        phone:client_phone,
        password: client_password
      };

      console.log(loginObject);
    
    //   var xhttp = new XMLHttpRequest();
     
    //    var url = "http://192.168.43.34:7887/login"
    
    //   xhttp.open("post", url, true);
    //   xhttp.setRequestHeader('Content-Type','application/json');
    //   xhttp.send(JSON.stringify(loginObject));
    
    //   xhttp.onreadystatechange = function() {
    //       if (this.readyState == 4 && this.status == 200) {
    //         // Typical action to be performed when the document is ready:
    //         var response = JSON.parse(xhttp.responseText);
    //         console.log(xhttp.responseText);
    //         console.log(response);
            
    //       }
    //   };
    

}