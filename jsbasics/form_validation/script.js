function submitForm() {
  const name = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;

  document.querySelectorAll(".error").forEach((el) => (el.innerText = ""));

  if (!/^[a-zA-Z\s]+$/.test(name)) {
    document.getElementById("nameerror").innerText =
      "Please enter a valid name (letters and spaces only)";
    return;
  }

  if (!/^[6-9]\d{9}$/.test(phone)) {
    document.getElementById("phoneerror").innerText =
      "Please enter a valid phone number (10 digits, starting with 6-9)";
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById("emailerror").innerText =
      "Please enter a valid email address";
    return;
  }

  if (password.length < 6) {
    document.getElementById("passworderror").innerText =
      "Password must be at least 6 characters";
    return;
  }

  console.log("Name: " + name);
  console.log("Phone: " + phone);
  console.log("Email: " + email);
  console.log("Password: " + password);
  alert("Form submitted successfully!");
}