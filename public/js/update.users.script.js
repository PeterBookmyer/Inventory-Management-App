var modalUpdateUser = document.getElementById("modalUpdateUser");

var updateUserBtn = document.getElementById("updateUserBtn");

var modalClose = document.getElementsByClassName("modal-close")[0];

document.addEventListener("DOMContentLoaded", function () {
  var options = { startingTop: "0%" };
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems, options);
  var instance = M.Modal.getInstance(modalUpdateUser);
  updateUserBtn.onclick = function () {
    instance.open();
  };
});

window.onclick = function (event) {
  if (event.target == modalUpdateUser) {
    modalUpdateUser.style.display = "none";
  }
};
