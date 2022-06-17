// Get the modal
var modalAddInv = document.getElementById("modalAddInv");

// Get the button that opens the modal
var addInvBtn = document.getElementById("addInvBtn");

// Get the element that closes the modal
var modalClose = document.getElementsByClassName("modal-close")[0];

// When the user clicks on the button, open the modal

document.addEventListener("DOMContentLoaded", function () {
  var options = { startingTop: "0%" };
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems, options);
  var instance = M.Modal.getInstance(modalAddInv);
  addInvBtn.onclick = function () {
    instance.open();
  };
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalAddInv) {
    modalAddInv.style.display = "none";
  }
};
