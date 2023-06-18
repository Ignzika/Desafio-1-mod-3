let price = 950500;

let amount = document.querySelector("#itemNumber");

let button = document.querySelector("#add");

let colorBuy = document.querySelector("#radio-selector");

let clearAll = document.querySelector("#clearAll");

button.addEventListener("click", () => {
  document.querySelector("#finalPrice").innerHTML = amount.value * price;

  document.querySelector("#finalAmount").innerHTML = amount.value;

  document.querySelector("#finalColor").style.backgroundColor = colorBuy.value;
});

clearAll.addEventListener("click", () => {
  document.querySelector("#finalPrice").innerHTML = 0;

  document.querySelector("#finalAmount").innerHTML = "";

  document.querySelector("#finalColor").style.backgroundColor = "";

  // window.location.reload(true) esto seria trampa ?
});
