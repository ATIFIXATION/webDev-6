document.querySelector("form").addEventListener("submit", (event) => {

  event.preventDefault();

  // Get values
  const dob = document.getElementById("DOB").value;

  const curDate = document.getElementById("CurrentDate").value;

  // Convert into arrays
  const dobYear = Number(dob.split("-")[0]);

  const currentYear = Number(curDate.split("-")[0]);

  // Calculate age
  const age = currentYear - dobYear;

  // Show result
  document.getElementById("MyAge").innerText = age;

  // Clear input fields
  document.getElementById("DOB").value = "";

  document.getElementById("CurrentDate").value = "";

});