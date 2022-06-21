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


// PUT update user form info on submit
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

// switch user admin status when changing toggle
const userUpdateAdminEl = document.getElementsByClassName("user-admin-toggle");
//declare id variable
let userAdminIdUpdate = 0;
//set click listener for each toggle
document.addEventListener("DOMContentLoaded", function () {
  // onclick for each userUpdateAdminEl
    for (i=0; i < userUpdateAdminEl.length; i++) {
      userUpdateAdminEl[i].addEventListener('click', userAdminUpdateHandler);
    };
  });
  
const userAdminUpdateHandler = async function(event) {
  event.preventDefault();
  userAdminIdUpdate = this.id.match(/[0-9]+$/)[0];
  //create object containing admin key
  const updateObj = {};
  if (this.checked) {
    updateObj.admin = true;
  } else {
    updateObj.admin = false;
  };
  
  const response = await fetch(`/api/users/edit/${userAdminIdUpdate}`, {
    method: 'PUT',
    body: JSON.stringify(updateObj),
    headers: { 'Content-Type': 'application/json' },
  });
  
  if (response.ok) {
    document.location.replace('/users');
  } else {
    console.log(response.status);
  }
};

//delete user
const userDeleteEl = document.getElementsByClassName("deleteUserButton");
//declare id variable
let userDeleteID = 0;
//set click listener for delete button
if (userDeleteEl[0]) {
  document.addEventListener("DOMContentLoaded", function () {
    // onclick for userDeleteEl
    userDeleteEl[0].addEventListener('click', userDeleteHandler);
  });
};
  
const userDeleteHandler = async function(event) {
  event.preventDefault();
  userDeleteID = this.id.match(/[0-9]+$/)[0];

  const response = await fetch(`/api/users/edit/${userDeleteID}`, {
    method: 'DELETE',
  });
  if (response.ok) {
    document.location.replace('/users');
  } else {
    console.log(response.status);
  }
};


