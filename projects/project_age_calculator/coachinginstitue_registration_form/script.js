let form = document.getElementById("registrationform");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  clearErrors();

  let isValid = true;

  let fullname = document.getElementById("fullname").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let dob = document.getElementById("dob").value;
  let grades = document.getElementById("grades").value;
  let city = document.getElementById("city").value.trim();
  let pincode = document.getElementById("pincode").value.trim();
  let guardianphone = document
    .getElementById("guardianphone")
    .value.trim();

  let address = document.getElementById("fulladdress").value.trim();

  // Full Name Validation
  let namePattern = /^[A-Za-z ]+$/;

  if (fullname === "") {
    showError("fullname", "Full name is required");
    isValid = false;
  } else if (!namePattern.test(fullname)) {
    showError("fullname", "Only letters and spaces allowed");
    isValid = false;
  }

  // Email Validation
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!emailPattern.test(email)) {
    showError("email", "Enter valid email");
    isValid = false;
  }

  // Mobile Validation
  let phonePattern = /^[6-9]\d{9}$/;

  if (!phonePattern.test(phone)) {
    showError(
      "phone",
      "Phone number must start from 6-9 and contain 10 digits"
    );
    isValid = false;
  }

  // DOB Validation
  if (dob === "") {
    showError("dob", "Date of birth required");
    isValid = false;
  } else {
    let birthDate = new Date(dob);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    let monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 &&
        today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    if (age < 15) {
      showError("dob", "Student must be at least 15 years old");
      isValid = false;
    }
  }

  // Grades Validation
  let gradePattern = /^(100|[0-9]{1,2})$/;
  let letterGradePattern = /^[A-F]$/;

  if (
    !gradePattern.test(grades) &&
    !letterGradePattern.test(grades)
  ) {
    showError("grades", "Enter valid percentage or grade A-F");
    isValid = false;
  }

  // Address Validation
  if (address === "") {
    showError("fulladdress", "Address cannot be empty");
    isValid = false;
  }

  // City Validation
  if (city === "") {
    showError("city", "City is required");
    isValid = false;
  } else if (!namePattern.test(city)) {
    showError("city", "City should contain only letters");
    isValid = false;
  }

  // Pincode Validation
  let pinPattern = /^\d{6}$/;

  if (!pinPattern.test(pincode)) {
    showError("pincode", "Pincode must contain exactly 6 digits");
    isValid = false;
  }

  // Guardian Phone Validation
  if (!phonePattern.test(guardianphone)) {
    showError(
      "guardianphone",
      "Guardian number must start from 6-9 and contain 10 digits"
    );
    isValid = false;
  }

  // Final Submission
  if (isValid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});

// Function to show errors
function showError(id, message) {
  let element = document.getElementById(id);

  let error = document.createElement("small");

  error.className = "text-danger d-block mt-1";

  error.innerText = message;

  element.parentNode.appendChild(error);
}

// Function to clear previous errors
function clearErrors() {
  let errors = document.querySelectorAll(".text-danger");

  errors.forEach(function (error) {
    error.remove();
  });
}

               

    