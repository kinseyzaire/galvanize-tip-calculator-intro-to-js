var button = document.getElementById("button");
var price = document.getElementById('price');
var amount = document.getElementById('amount');

button.addEventListener("click", testingThem, false);



function testingThem() {
   var tip = calculator(price.value,amount.value);
   document.getElementById("tipThisMuch").innerText = "You should tip $" + tip;

}
