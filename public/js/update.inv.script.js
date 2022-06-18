var modalUpdateInv = document.getElementById("modalUpdateInv");

var updateInvBtn = document.getElementById("updateInvBtn");

var modalClose = document.getElementsByClassName("modal-close")[0];

document.addEventListener("DOMContentLoaded", function () {
  var options = { startingTop: "0%" };
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems, options);
  var instance = M.Modal.getInstance(modalUpdateInv);
  updateInvBtn.onclick = function () {
    instance.open();
  };
});

window.onclick = function (event) {
  if (event.target == modalUpdateInv) {
    modalUpdateInv.style.display = "none";
  }
};


// post form info on submit
const itemFormEl = document.querySelector('#add-item-form');
const itemFormHandler = async function(event) {
    event.preventDefault();

    const nameEl = document.querySelector('#itemName');
    const stockEl = document.querySelector('#currentStock');
    const imageEl = document.querySelector('#imageLink');
    const costEl = document.querySelector('#itemCost');
    const priceEl = document.querySelector('#salePrice');
    const orderEl = document.querySelector('#orderLink'); 

    const response = await fetch('/api/inventory/', {
        method: 'POST',
        body: JSON.stringify({
            name: nameEl.value,
            current_stock: stockEl.value,
            image_file: imageEl.value,
            cost: costEl.value,
            sales_price: priceEl.value,
            order_link: orderEl.value
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
    document.location.replace('/inventory');
    } else {
    alert('Please fill in all required fields');
    }
};

if (itemFormEl) {
    itemFormEl.addEventListener('submit', itemFormHandler);
};
