
var store=window.localStorage;

function update_order()
{
    var order_details = store.getItem("order_details");
    var order_array = order_details.split(",")
    console.log(order_array);
    var id_array=['order_id','symbol','date',
            'time','qty','trade_type','limit_price','direction','value','status'];
            for(var i=0;i<order_array.length;i++)
            {
                document.getElementById(id_array[i]).value=order_array[i];
            }
};

 function modify_order() {

    var order = store.getItem("order_details");
    var order_array=order.split(",");
    order_id=order_array[0];
     var x = document.getElementById("new_price").value;
     var y = document.getElementById("new_qty").value;
     var xhttp = new XMLHttpRequest();
     var url = "http://192.168.43.34:7887/updateOrder/"+order_id+"/"+y+"/"+x;
     console.log(url);
        xhttp.open("post", url, true);
        xhttp.setRequestHeader('Content-Type','application/json');
        xhttp.send();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              // Typical action to be performed when the document is ready:
              var response = JSON.parse(xhttp.responseText);
              success_message();
        };
      }
}

function delete_order() {

  var order = store.getItem("order_details");
  var order_array=order.split(",");
  order_id=order_array[0];
        var xhttp = new XMLHttpRequest();
        var url = "http://192.168.43.34:7887/deleteOrder/"+order_id;

         xhttp.open("post", url, true);
         xhttp.setRequestHeader('Content-Type','application/json');
         xhttp.send();

         xhttp.onreadystatechange = function() {
             if (this.readyState == 4 && this.status == 200) {
               // Typical action to be performed when the document is ready:
               var response = JSON.parse(xhttp.responseText);

               success_message();
    }
  };
}

    function success_message() {
      setTimeout(function() {
        swal({
          title:"Order Details Updated Successfully.",
          text:"Your trade order has been placed successfully",
          type: "success"
        },
        function() {
                  window.location = "../templates/manage_orders.html";
            }
          );
        }, 300);
    }
