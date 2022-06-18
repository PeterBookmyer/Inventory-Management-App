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


// post form info on submit
const userFormEl = document.querySelector('#add-user-form');
const userFormHandler = async function(event) {
    event.preventDefault();

    const firstNameEl = document.querySelector('#firstNameInput');
    const lastNameEl = document.querySelector('#lastNameInput');
    const emailEl = document.querySelector('#emailInput');
    const adminEl = document.querySelector('#adminBtnInput');
    const usernameEl = document.querySelector('#usernameInput');
    const passwordEl = document.querySelector('#passwordInput'); 
    const response = await fetch('/api/users/new', {
        method: 'POST',
        body: JSON.stringify({
            first_name: firstNameEl.value,
            last_name: lastNameEl.value,
            email: emailEl.value,
            admin: adminEl.checked,
            username: usernameEl.value,
            password: passwordEl.value
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
    document.location.replace('/users');
    } else {
    alert('Please fill in all required fields');
    }
};

if (userFormEl) {
    userFormEl.addEventListener('submit', userFormHandler);
};
