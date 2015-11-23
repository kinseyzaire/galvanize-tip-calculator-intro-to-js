var button = document.getElementById("button");
var price = document.getElementById('price');
var amount = document.getElementById('amount');

button.addEventListener("click", calculateTip, false);

function calculateTip() {
   var tip = calculator(price.value,amount.value);
   document.getElementById("tipThisMuch").innerText = "You should tip $" + tip.toFixed(2);

}
