document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const username = document.getElementById("username");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");

  const usernameError = document.getElementById("usernameError");
  const phoneError = document.getElementById("phoneError");
  const emailError = document.getElementById("emailError");

  form.addEventListener("submit", function (e) {
    let valid = true;

    if (username.value.trim() === "") {
      usernameError.style.display = "block";
      valid = false;
    } else {
      usernameError.style.display = "none";
    }

    if (!/^[0-9]{10}$/.test(phone.value.trim())) {
      phoneError.style.display = "block";
      valid = false;
    } else {
      phoneError.style.display = "none";
    }

    if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email.value.trim())) {
      emailError.style.display = "block";
      valid = false;
    } else {
      emailError.style.display = "none";
    }

    if (!valid) {
      e.preventDefault();
    } else {
      alert("Login successful!");
      e.preventDefault(); // Prevent real submission (for demo/testing)
    }
  });
});
