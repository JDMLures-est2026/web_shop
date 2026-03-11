// ======================================
// JDMLures PayPal Button Script
// 外部JS（detailページ干渉なし）
// ======================================

(function(){

if(!window.paypal){
console.log("PayPal SDK not loaded");
return;
}

const price = "180";

const returnURL =
"https://jdmlures-est2026.github.io/web_shop/detail/success.html";

const cancelURL =
"https://jdmlures-est2026.github.io/web_shop/index.html";

function createPaypalButton(containerID){

if(!document.getElementById(containerID)){
return;
}

paypal.Buttons({

style:{
layout:"vertical",
color:"gold",
shape:"rect",
label:"paypal"
},

createOrder:function(data,actions){

return actions.order.create({

purchase_units:[
{
amount:{
value:price
}
}
],

application_context:{
return_url:returnURL,
cancel_url:cancelURL
}

});

},

onApprove:function(data,actions){

return actions.order.capture().then(function(details){

console.log(
"Transaction completed by " +
details.payer.name.given_name
);

});

}

}).render("#"+containerID);

}

document.addEventListener("DOMContentLoaded",function(){

createPaypalButton("paypal-button-container-top");
createPaypalButton("paypal-button-container-bottom");

});

})();