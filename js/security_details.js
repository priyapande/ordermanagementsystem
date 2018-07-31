var store=window.localStorage;
var security=store.getItem("security_details");
var sec_array=security.split(',');

function set_securities()
{
    //console.log("reached here");
    var id_array=['security_name','sector','symbol','market_lot','price_variance','price','isin'];
    console.log(sec_array);
    for(var i=0;i<sec_array.length;i++)
    {
       //console.log(document.getElementById(id_array[i]));
       if(i!=4)
        document.getElementById(id_array[i]).value=sec_array[i];
    }
}

function place_order() {
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

    var bidPrice=document.getElementById("bid_price").value;
    var qty=document.getElementById("qty").value;
    var direction;
    if(document.getElementById("buy").checked)
         direction = "B";
    else direction = "S";

    var type;
    if(document.getElementById("limit_order").checked)
         type = 'LIMIT';
    else type = 'MARKET';

    var value = bidPrice*qty;

    var postObject = {
        clientCode:store.getItem('client_code'),
        symbol:sec_array[2],
        tradedate:today,
        tradetime:curret_time,
        quantity:qty,
        tradeType:type,
        limitPrice:bidPrice,
        direction:direction,
        value:value
    };
    console.log(postObject);

  var xhttp = new XMLHttpRequest();
  var url = "http://192.168.43.34:7887/addOrder"

  xhttp.open("post", url, true);
  xhttp.setRequestHeader('Content-Type','application/json');
  xhttp.send(JSON.stringify(postObject));

  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        var response = JSON.parse(xhttp.responseText);
        console.log(xhttp.responseText);
        // console.log(response);
        // var store=window.localStorage;
        // store.setItem("client_code",response.code);
        // console.log(store);
        // window.location="../templates/dashboard.html";

        success_message();

      }
  };
}

function success_message()
{
    swal("Order Placed Successfully.", "Your trade order has been placed successfully", "success");
}