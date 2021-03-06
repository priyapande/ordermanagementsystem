function get_securities() {

    var store=window.localStorage;
    console.log("insside the function()");
    //Get the current date
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
    var curret_time = hours + ":" + minutes;

    var postObject = {
            date: today,
            time: curret_time
        };

    var xhttp = new XMLHttpRequest();
    // var url = "http://192.168.43.34:7887/getAllSecurities/"+today+"/"+curret_time;
    var url = "http://192.168.43.34:7887/getAllSecurities/29-07-2018/20:30";
    console.log(url);
    xhttp.open("get", url, true);
        //xhttp.setRequestHeader('Content-Type','application/json');
    xhttp.send();

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            console.log(xhttp.responseText);

            // convert string to JSON
            //  var response = $.parseJSON(xhttp.responseText);
            var response = JSON.parse(xhttp.responseText);

            //delete keys not required in JSON Object
            for(var k=0;k<response.length;k++)
            {
                delete response[k].buyCount;
                delete response[k].sellCount;
            }

            // EXTRACT VALUE FOR HTML HEADER.
            var col = [];
            console.log(response);
            for (var i = 0; i < response.length; i++) {
                for (var key in response[i]) {
                  console.log(key);
                    if (col.indexOf(key) === -1) {
                        col.push(key);
                    }
                }
            }
            console.log(col);


            // var fieldOrder = [""];

            // CREATE DYNAMIC TABLE.
            var table = document.createElement("table");
            var tr = table.insertRow(-1);

            // for (var i = 0; i < col.length; i++) {
            //     var th = document.createElement("th");      // TABLE HEADER.
            //     th.innerHTML = col[i];
            //     tr.appendChild(th);
            // }

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

            // tr.onclick = function() {
            //     var row=[];
            //     for(var k=0;k<7;k++)
            //     {
            //         row.push(tr.cells[k].innerHTML);
            //     }
            //
            //
            //     console.log(row);
            //
            //     store.setItem("security_details",row);
            //
            // }

            // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
            var divContainer = document.getElementById("showData");
            divContainer.innerHTML = "";
            divContainer.appendChild(table);

            }
        };
}

function addRowHandlers() {
  var store=window.localStorage;
  var table = document.getElementById("showData");
  var rows = table.getElementsByTagName("tr");
  console.log(rows);
  var data=[];
  for (i = 1; i < rows.length; i++) {
    var currentRow = rows[i];
    var createClickHandler = function(currentRow) {
      return function() {
        var cells = currentRow.getElementsByTagName("td");
        for(var k=0;k<cells.length;k++){
          var cell = cells[k];
          var id = cell.innerHTML;
          data.push(id);
        //  alert("id:" + id);
        }
        store.setItem("security_details",data);
        window.location="../templates/order_book.html"
        console.log(store);
      };
    };
    currentRow.onclick = createClickHandler(currentRow);
  }
}
