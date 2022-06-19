var modalUpdateInv = document.getElementsByClassName("modalUpdateInv"); 

var updateInvBtn = document.getElementsByClassName("updateInvBtn"); // has length === num of rows

var modalClose = document.getElementsByClassName("modal-close"); // refernces the submit button

document.addEventListener("DOMContentLoaded", function () {
  var options = { startingTop: "0%" }; //correct
  var elems = document.querySelectorAll(".modal"); //correct as far as i can tell
  var instances = M.Modal.init(elems, options); // inits all modals
  var instance = M.Modal.getInstance(modalUpdateInv[0]); //references the first modal because [0]
  updateInvBtn[0].onclick = function () { // [0] needs to be a var that determines the row
    instance.open();
  };
  modalClose[0].onclick = function () { // [0] needs to be a var that determines the row
    instance.close();
  };
});

window.onclick = function (event) {
  if (event.target == modalUpdateInv[0]) {
    modalUpdateInv[0].style.display = "none";
  }
};

