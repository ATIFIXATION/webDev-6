let calculateBtn = document.getElementById("calculateBtn");
let resetBtn = document.getElementById("resetBtn");

calculateBtn.addEventListener("click", function () {
  let units = Number(document.getElementById("units").value);

  // Validation
  if (units <= 0 || isNaN(units)) {
    alert("Please enter valid electricity units");
    return;
  }

  let remainingUnits = units;

  let slab1Units = 0;
  let slab2Units = 0;
  let slab3Units = 0;
  let slab4Units = 0;

  let slab1Charge = 0;
  let slab2Charge = 0;
  let slab3Charge = 0;
  let slab4Charge = 0;

  // First 50 Units
  if (remainingUnits > 0) {
    slab1Units = Math.min(remainingUnits, 50);
    slab1Charge = slab1Units * 0.5;
    remainingUnits -= slab1Units;
  }

  // Next 150 Units
  if (remainingUnits > 0) {
    slab2Units = Math.min(remainingUnits, 150);
    slab2Charge = slab2Units * 0.75;
    remainingUnits -= slab2Units;
  }

  // Next 250 Units
  if (remainingUnits > 0) {
    slab3Units = Math.min(remainingUnits, 250);
    slab3Charge = slab3Units * 1.2;
    remainingUnits -= slab3Units;
  }

  // Above 450 Units
  if (remainingUnits > 0) {
    slab4Units = remainingUnits;
    slab4Charge = slab4Units * 1.5;
  }

  // Subtotal
  let subtotal =
    slab1Charge +
    slab2Charge +
    slab3Charge +
    slab4Charge;

  // Surcharge
  let surcharge = subtotal * 0.2;

  // Grand Total
  let grandTotal = subtotal + surcharge;

  // Display Values
  document.getElementById(
    "slab1"
  ).innerText = `${slab1Units} Units = ₹${slab1Charge.toFixed(2)}`;

  document.getElementById(
    "slab2"
  ).innerText = `${slab2Units} Units = ₹${slab2Charge.toFixed(2)}`;

  document.getElementById(
    "slab3"
  ).innerText = `${slab3Units} Units = ₹${slab3Charge.toFixed(2)}`;

  document.getElementById(
    "slab4"
  ).innerText = `${slab4Units} Units = ₹${slab4Charge.toFixed(2)}`;

  document.getElementById(
    "subtotal"
  ).innerText = `₹${subtotal.toFixed(2)}`;

  document.getElementById(
    "surcharge"
  ).innerText = `₹${surcharge.toFixed(2)}`;

  document.getElementById(
    "grandTotal"
  ).innerText = `₹${grandTotal.toFixed(2)}`;

  // Show Result Card
  document.getElementById("resultCard").style.display = "block";
});

// Reset Button
resetBtn.addEventListener("click", function () {
  document.getElementById("units").value = "";

  document.getElementById("resultCard").style.display = "none";
});