let calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", function () {
  let billAmount = document.getElementById("billAmount").value;

  let service = document.getElementById("service").value;

  let persons = document.getElementById("persons").value;

  // Validation
  if (billAmount === "" || service === "" || persons === "") {
    alert("Please fill all fields");
    return;
  }

  // Convert into numbers
  billAmount = Number(billAmount);
  service = Number(service);
  persons = Number(persons);

  // Tip Calculation
  let tip = billAmount * service;

  // Total Bill
  let totalBill = billAmount + tip;

  // Per Person Amount
  let perPerson = totalBill / persons;

  // Show Result
  document.getElementById("amount").innerText =
    perPerson.toFixed(2);

  document.getElementById("result").style.display = "block";
});