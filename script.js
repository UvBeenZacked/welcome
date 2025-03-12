function checkPassword() {
    var password = document.getElementById("password").value;

    // Change this password to your desired one
    var correctPassword = "12345";
    var adminPassword = "24245";
    var sickminded = "6969";

    if (password === correctPassword) {
        window.location.href = "protected.html"; // Redirect to the protected page
    } else if (password === adminPassword) {
        window.location.href = "edit1.html"; // Redirect to the admin page
    } else if (password === sickminded) {
        window.location.href = "skmndd.html"; // Redirect to the sick minded page
    } else {
        document.getElementById("error-message").innerText = "Incorrect password. Try again.";
    }
}
