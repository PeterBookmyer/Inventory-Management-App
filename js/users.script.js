var modalAddUser = document.getElementById("modalAddUser");

var addUserBtn = document.getElementById("addUserBtn");

var modalClose = document.getElementsByClassName("modal-close")[0];

document.addEventListener("DOMContentLoaded", function () {
  var options = { startingTop: "0%" };
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems, options);
  var instance = M.Modal.getInstance(modalAddUser);
  addUserBtn.onclick = function () {
    instance.open();
  };
});

window.onclick = function (event) {
  if (event.target == modalAddUser) {
    modalAddUser.style.display = "none";
  }
};
