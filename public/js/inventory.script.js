// Get the modal
var modalAddInv = document.getElementById("modalAddInv");

// Get the button that opens the modal
var addInvBtn = document.getElementById("addInvBtn");

// Get the element that closes the modal
var modalClose = document.getElementsByClassName("modal-close")[0];

// When the user clicks on the button, open the modal
if (addInvBtn) {
  document.addEventListener("DOMContentLoaded", function () {
    var options = { startingTop: "0%" };
    var elems = document.querySelectorAll(".modal");
    var instances = M.Modal.init(elems, options);
    var instance = M.Modal.getInstance(modalAddInv);
    addInvBtn.onclick = function () {
      instance.open();
    };
  });
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalAddInv) {
    modalAddInv.style.display = "none";
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

