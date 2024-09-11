let scrollTimeout;
let resizeTimeout;

document.addEventListener('DOMContentLoaded', function() {
    // Function to add alert
    function addAlert(message) {
        alert(message);
    }

    // Event listener for the "Sign Up" button
    const signupBtn = document.getElementById('signupBtn');
    if (signupBtn) {
        signupBtn.addEventListener('click', function(event) {
            addAlert('You clicked on Sign Up!');
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Function to add alert
    function addAlert(message) {
        alert(message);
    }

    // Event listener for the "Create a new account" button
    const createAccountBtn = document.getElementById('createAccountBtn');
    if (createAccountBtn) {
        createAccountBtn.addEventListener('click', function(event) {
            addAlert('You clicked on Create a new account!');
        });
    }
});


window.addEventListener('scroll', function() {
    if (!scrollTimeout) {
        scrollTimeout = setTimeout(function() {
            alert('You have scrolled the page!');
            scrollTimeout = null;
        }, 100); // Adjust the timeout as needed
    }
});

window.addEventListener('resize', function() {
    if (!resizeTimeout) {
        resizeTimeout = setTimeout(function() {
            alert('You have resized the window!');
            resizeTimeout = null;
        }, 100); // Adjust the timeout as needed
    }
});
