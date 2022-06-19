var modalUpdateInv = document.getElementById("modalUpdateInv");

var updateInvBtn = document.getElementsByClassName("updateInvBtn"); // array of all buttons

var modalClose = document.getElementsByClassName("modal-close")[0];

// modal vars
var options = { startingTop: "0%" };
var elems = document.querySelectorAll(".modal");
var instances = M.Modal.init(elems, options);
var instance = M.Modal.getInstance(modalUpdateInv);

// allow all buttons to open the modal
document.addEventListener("DOMContentLoaded", function () {
  for (i=0; i < updateInvBtn.length; i++) {
    updateInvBtn[i].onclick = function () {
      instance.open();
    };
  }
});

  
window.onclick = function (event) {
  if (event.target == modalUpdateInv) {
    modalUpdateInv.style.display = "none";
  }
};
