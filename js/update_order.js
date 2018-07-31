function update_order()
{
    var store=window.localStorage;
    var order=store.getItem("order_details");
    var sec_array=order.split(',');
    
    console.log(store);
    function set_securities()
    {
        // //console.log("reached here");
        // var id_array=['order_id','symbol','symbol','market_lot','price_variance','price','isin'];
        // console.log(sec_array);
        // for(var i=0;i<sec_array.length;i++)
        // {
        //    //console.log(document.getElementById(id_array[i]));
        //    if(i!=4)
        //     document.getElementById(id_array[i]).value=sec_array[i];
        // }
    }
    
    
}