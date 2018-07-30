function set_securities()
{
    console.log("reached here");
    var store=window.localStorage;
    var security=store.getItem("security_details");
    var sec_array=security.split(',');

    var id_array=['security_name','sector','symbol','market_lot','price_variance','price','isin'];
    console.log(sec_array);
    for(var i=0;i<sec_array.length;i++)
    {
       console.log( document.getElementById(id_array[i]));
       document.getElementById(id_array[i]).value=sec_array[i];
    }
}