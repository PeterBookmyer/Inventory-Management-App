var modalUpdateInv = document.getElementById("modalUpdateInv");

var updateInvBtn = document.getElementsByClassName("updateInvBtn"); // array of all buttons

var modalClose = document.getElementsByClassName("modal-close")[0];

var deleteInvBtn = document.getElementById("deleteInv");

// modal vars
var options = { startingTop: "0%" };
var elems = document.querySelectorAll(".modal");
var instances = M.Modal.init(elems, options);
var instance = M.Modal.getInstance(modalUpdateInv);

// id of clicked el
let idUpdate = 0;

//Event Listener for deleting an item
const deleteClickHandler = async function () {
  await fetch(`/api/inventory/${this.id}`, {
    method: "DELETE",
  });
  document.location.deleteInvBtn(`/api/inventory/${this.id}`);
};

// allow all buttons to open the modal
console.log('hmmmmm');
document.addEventListener("DOMContentLoaded", function () {
  for (i = 0; i < updateInvBtn.length; i++) {
    updateInvBtn[i].onclick = function () {
      instance.open();
      // parse item id out of button's id
      idUpdate = this.id.match(/[0-9]+$/)[0];
    };
  }
});

window.onclick = function (event) {
  if (event.target == modalUpdateInv) {
    modalUpdateInv.style.display = "none";
  }
};

// PUT form info on submit
const itemUpdateFormEl = document.querySelector("#update-item-form");
const itemUpdateFormHandler = async function (event) {
  event.preventDefault();

  const nameEl = document.querySelector("#itemNameUpdate");
  const stockEl = document.querySelector("#currentStockUpdate");
  const imageEl = document.querySelector("#imageLinkUpdate");
  const costEl = document.querySelector("#itemCostUpdate");
  const priceEl = document.querySelector("#salePriceUpdate");
  const orderEl = document.querySelector("#orderLinkUpdate");

  //create object containing only filled in info
  const updateObj = {};
  if (nameEl.value) {
    updateObj.name = nameEl.value;
  }
  if (stockEl.value) {
    updateObj.current_stock = stockEl.value;
  }
  if (imageEl.value) {
    updateObj.image_file = imageEl.value;
  }
  if (costEl.value) {
    updateObj.cost = costEl.value;
  }
  if (priceEl.value) {
    updateObj.sales_price = priceEl.value;
  }
  if (orderEl.value) {
    updateObj.order_link = orderEl.value;
  }

  const response = await fetch(`/api/inventory/${idUpdate}`, {
    method: "PUT",
    body: JSON.stringify(updateObj),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/inventory");
  } else {
    alert("Please fill in all required fields");
  }
};

if (itemUpdateFormEl) {
  itemUpdateFormEl.addEventListener("submit", itemUpdateFormHandler);
}
