var $ = function(id){
    return document.getElementById(id);
}//$
var calculate_click = function() {
    //DEBUG alert("in calculate click");
    var subtotal = parseFloat($("subtotal").value);
    var taxRate = parseFloat($("taxRate").value);
    var shippingCharges = parseFloat($("shippingCharges").value);
    //DEBUG alert("shipping charges value is : " + shippingCharges);
    if (isNaN(subtotal) || isNaN(taxRate) || isNaN(shippingCharges)){
        alert("please enter numbers");
        return false;
    }//if

    $("salesTax").value = " ";
    $("total").value = " ";

    var salesTax = subtotal * (taxRate/100);
    salesTax = parseFloat(salesTax.toFixed(2));
    var total = subtotal + salesTax + shippingCharges;
    //DEBUG alert("Total is" + total);

    $("salesTax").value = "$" + salesTax.toFixed(2);
    $("total").value = "$" + total.toFixed(2);

    return false;

}//calculate_click

window.onload = function(){
    //DEBUG alert("The page has now loaded");
    $("subtotal").value = " ";
    $("taxRate").value = " ";
    $("shippingCharges").value = " ";
    $("salesTax").value = " ";
    $("total").value = " ";

}//onload