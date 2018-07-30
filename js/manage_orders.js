function get_orders() {    
    
    var store=window.localStorage;
    var client_code=store.getItem("client_code");
   //console.log(client_code);    
    
    var xhttp = new XMLHttpRequest();
    var url = "http://192.168.43.34:7887/getOrders/"+client_code; 
        //console.log(url);
    xhttp.open("get", url, true);
    xhttp.send();    
    xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            console.log(xhttp.responseText);

            // convert string to JSON
            var response = JSON.parse(xhttp.responseText);


            // EXTRACT VALUE FOR HTML HEADER. 
            var col = [];
            for (var i = 0; i < response.length; i++) {
                for (var key in response[i]) {
                    if (col.indexOf(key) === -1) {
                        col.push(key);
                    }
                }
            }

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

                for (var j = 0; j < col.length; j++)
                 {
                     if(j!=1)
                    {
                        var tabCell = tr.insertCell(-1);
                        var j1 = j + 1;
                        tabCell.classList.add("cell100")
                        tabCell.classList.add("column" + j1)
                        if(j==10)
                        {
                           
                            var value=response[i][col[j]];
                            if(value==0)
                            {
                                tabCell.innerHTML = "Unprocessed";
                            }
                            else if(value==1)
                            {
                                tabCell.innerHTML = "In Progress";
                            }
                            else if(value==2)
                            {
                                tabCell.innerHTML = "Completed";
                            }
                            else
                            tabCell.innerHTML = "Cancelled";
                        }
                        else
                        {
                            tabCell.innerHTML = response[i][col[j]];
                        }
                    
                     }
                }


                // tr.onclick = function() {
                //     var row=[];
                //     for(var k=0;k<7;k++)
                //     {
                //         row.push(tr.cells[k].innerHTML);
                //     }
                  
                //     console.log(store);
                //     console.log(row);

                //     store.setItem("security_details",row);

                //     window.location="../templates/security_details.html"
                // }
                
            }

            // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
            var divContainer = document.getElementById("showData");
            divContainer.innerHTML = "";
            divContainer.appendChild(table);

           }
        };
}