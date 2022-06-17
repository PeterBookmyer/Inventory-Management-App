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
