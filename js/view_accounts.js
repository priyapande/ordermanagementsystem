function calculate_receivables()
{

    var store=window.localStorage;
    var client_code= store.getItem("client_code");
    //console.log(store);

        var xhttp = new XMLHttpRequest();
        var url = "http://192.168.43.34:7887/getReportByClient/"+client_code;
        //console.log(url);
        xhttp.open("get", url, true);
        xhttp.setRequestHeader('Content-Type','application/json');
        xhttp.send();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            //console.log(xhttp.responseText);

            // convert string to JSON
            var response = JSON.parse(xhttp.responseText);
            console.log(response);

               // EXTRACT VALUE FOR HTML HEADER.
               var col = [];
               //console.log(response);
               for (var i = 0; i < response.length; i++) {
                   for (var key in response[i]) {
                     //console.log(key);
                       if (col.indexOf(key) === -1) {
                           col.push(key);
                       }
                   }
               }
               //console.log(col);

     // CREATE DYNAMIC TABLE.
     var table = document.createElement("table");
     var tr = table.insertRow(-1);


     // ADD JSON DATA TO THE TABLE AS ROWS.
     for (var i = 0; i < response.length; i++) {
         tr = table.insertRow(-1);

         for (var j = 0; j < col.length; j++) {
             var tabCell = tr.insertCell(-1);
             var j1 = j + 1;
             tabCell.classList.add("cell100")
             tabCell.classList.add("column" + j1)
             tabCell.innerHTML = response[i][col[j]];
         }

     }


     // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
     var divContainer = document.getElementById("sData");
     divContainer.innerHTML = "";
     divContainer.appendChild(table);
     var sum =0;
     for (var i = 0; i < response.length; i++) {
              sum += response[i].balance;
         }
         document.getElementById("net_amount").innerHTML=sum;

   }
   };

}
