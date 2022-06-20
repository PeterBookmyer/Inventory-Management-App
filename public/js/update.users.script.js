var modalUpdateUser = document.getElementById("modalUpdateUser");

var updateUserBtn = document.getElementsByClassName("updateUserBtn");

var modalClose = document.getElementsByClassName("modal-close")[0];

// modal vars
var options = { startingTop: "0%" };
var elems = document.querySelectorAll(".modal");
var instances = M.Modal.init(elems, options);
var instance = M.Modal.getInstance(modalUpdateUser);

// declare id of clicked element
let userIdUpdate = 0;

document.addEventListener("DOMContentLoaded", function () {
// onclick for each updateUserBtn
  for (i=0; i < updateUserBtn.length; i++) {
    updateUserBtn[i].onclick = function () {
      instance.open();
      // parse item id out of button's id
      userIdUpdate = this.id.match(/[0-9]+$/)[0];
    };
  }
});

window.onclick = function (event) {
  if (event.target == modalUpdateUser) {
    modalUpdateUser.style.display = "none";
  }
};


// PUT update form info on submit
const userUpdateFormEl = document.querySelector('#user-update-form');
const userUpdateFormHandler = async function(event) {
    event.preventDefault();

    const fistNameEl = document.querySelector('#firstNameUpdate');
    const lastNameEl = document.querySelector('#lastNameUpdate');
    const emailEl = document.querySelector('#emailUpdate');
    const adminEl = document.querySelector('#adminBtnUpdate');
    const usernameEl = document.querySelector('#usernameUpdate');
    const passwordEl = document.querySelector('#passwordUpdate');
    
    //create object containing only filled in info
    const updateObj = {};
    if (fistNameEl.value) {
      updateObj.first_name = fistNameEl.value;
    };
    if (lastNameEl.value) {
      updateObj.last_name = lastNameEl.value;
    };
    if (emailEl.value) {
      updateObj.email = emailEl.value;
    };
    if (adminEl.checked) {
      updateObj.admin = true;
    } else {
      updateObj.admin = false;
    };
    if (usernameEl.value) {
      updateObj.username = usernameEl.value;
    };
    if (passwordEl.value) {
      updateObj.password = passwordEl.value;
    };

    const response = await fetch(`/api/users/edit/${userIdUpdate}`, {
        method: 'PUT',
        body: JSON.stringify(updateObj),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
    document.location.replace('/users');
    } else {
    alert('Please fill in all required fields');
    }
};

if (userUpdateFormEl) {
    userUpdateFormEl.addEventListener('submit', userUpdateFormHandler);
};

