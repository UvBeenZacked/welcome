function checkPassword() {
    var password = document.getElementById("password").value;

    // Change this password to your desired one
    var correctPassword = "12345";

    if (password === correctPassword) {
        window.location.href = "protected.html"; // Redirect to the protected page
    } else {
        document.getElementById("error-message").innerText = "Incorrect password. Try again.";
    }
}


