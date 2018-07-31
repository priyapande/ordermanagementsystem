function dashboard_load()
{

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();
  if(dd<10)
  {
      dd='0'+dd;
  }
  if(mm<10)
  {
      mm='0'+mm;
  }
  today = mm+'-'+dd+'-'+yyyy;
  console.log(today);
  //Get the current time
  var date = new Date();
  var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  var current_time = hours + ":" + minutes;

  var postObject = {
          date: today,
          time: current_time
      };


        var xhttp = new XMLHttpRequest();
        //var url = "http://192.168.43.34:7887/getTopSecuritiesByPrice/"+today+"/"+current_time;
        var url = "http://192.168.43.34:7887/getTopSecuritiesByPrice/19-07-2018/3:3";

        xhttp.open("get", url, true);
        //xhttp.setRequestHeader('Content-Type','application/json');
        xhttp.send();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            console.log(xhttp.responseText);

            // convert string to JSON
            var response = JSON.parse(xhttp.responseText);

            console.log(response);


        //     // CREATE DYNAMIC TABLE.
        //     var table = document.createElement("table");
        //     var tr = table.insertRow(-1);
        //
        //     // ADD JSON DATA TO THE TABLE AS ROWS.
        //     for (var i = 0; i < response[0].length; i++) {
        //         tr = table.insertRow(-1);
        //
        //         for (var j = 0; j < response.length; j++) {
        //             var tabCell = tr.insertCell(-1);
        //             var j1 = j + 1;
        //             tabCell.classList.add("cell100")
        //             tabCell.classList.add("column" + j1)
        //             var t = response[j][i];
        //             tabCell.innerHTML = t.price;
        //         }
        //
        // }
        // //console.log(table);
        //
        //     // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        //     var divContainer = document.getElementById("sData");
        //     divContainer.innerHTML = "";
        //     divContainer.appendChild(table);
        //     console.log(divContainer);
      }
    };

}
