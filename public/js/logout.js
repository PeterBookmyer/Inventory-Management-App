const logOutEl = document.getElementById("logout-button");

const logOut = async function() {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to log out');
    }
};

logOutEl.addEventListener("click", logOut);



