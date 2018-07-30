function order_book_mgmt()
{

    var store=window.localStorage;
    var security= store.security_details.split(',');
    document.getElementById("header_title").innerHTML="Current top prices for " + security[0];


        var xhttp = new XMLHttpRequest();
        var url = "http://192.168.43.34:7887/getTopOrders/"+security[2]; 
        console.log(url);
        xhttp.open("get", url, true);
        //xhttp.setRequestHeader('Content-Type','application/json');
        xhttp.send();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            console.log(xhttp.responseText);

            // convert string to JSON
            var response = JSON.parse(xhttp.responseText);
            var buy = response.buy;
            var sell = response.sell;
            console.log(sell);

            // EXTRACT VALUE FOR HTML HEADER. 
            var col = [];
            for (var i = 0; i < response.length; i++) {
                for (var key in response[i]) {
                    if (col.indexOf(key) === -1) {
                        col.push(key);
                    }
                }
            }

        //     // var fieldOrder = [""];

            // CREATE DYNAMIC TABLE.
            var table = document.createElement("table");
            var tr = table.insertRow(-1); 

            // ADD JSON DATA TO THE TABLE AS ROWS.
            for (var i = 0; i < buy.length; i++) {
                tr = table.insertRow(-1);
                var tabCell = tr.insertCell(-1);
                var j1 = 1;
                tabCell.classList.add("cell100")
                tabCell.classList.add("column" + j1)
                        tabCell.innerHTML = buy[i][col[0]];
        }

        for (var i = 0; i < sell.length; i++) {
            tr = table.insertRow(-1);
            var tabCell = tr.insertCell(-1);
            var j1 = 2;
            tabCell.classList.add("cell100")
            tabCell.classList.add("column" + j1)
                    tabCell.innerHTML = buy[i][col[1]];
    }

            // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
            var divContainer = document.getElementById("showData");
            divContainer.innerHTML = "";
            divContainer.appendChild(table);

           }
        };
    
}