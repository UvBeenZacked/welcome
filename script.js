function checkPassword() {
    var password = document.getElementById("password").value;

    // Change this password to your desired one
    var correctPassword = "12345";
    var adminPassword = "24245";

    if (password === correctPassword) {
        window.location.href = "protected.html"; // Redirect to the protected page
    } else if (password === adminPassword) {
        window.location.href = "admin.html"; // Redirect to the admin page
    } else {
        document.getElementById("error-message").innerText = "Incorrect password. Try again.";
    }
}
