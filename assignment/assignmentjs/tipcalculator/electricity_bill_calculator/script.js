let calculateBtn = document.getElementById("calculateBtn");
let resetBtn = document.getElementById("resetBtn");

calculateBtn.addEventListener("click", () => {
  let units = +document.getElementById("units").value;

  if (units <= 0 || isNaN(units)) {
    alert("Enter valid units");
    return;
  }

  let slabs = [
    [50, 0.5],
    [150, 0.75],
    [250, 1.2],
    [Infinity, 1.5],
  ];

  let charges = [];
  let subtotal = 0;

  slabs.forEach((slab, i) => {
    let used = Math.min(units, slab[0]);
    let charge = used * slab[1];

    charges.push([used, charge]);

    subtotal += charge;
    units -= used;
  });

  let surcharge = subtotal * 0.2;
  let grandTotal = subtotal + surcharge;

  charges.forEach((c, i) => {
    document.getElementById(
      `slab${i + 1}`
    ).innerText = `${c[0]} Units = ₹${c[1].toFixed(2)}`;
  });

  document.getElementById("subtotal").innerText =
    `₹${subtotal.toFixed(2)}`;

  document.getElementById("surcharge").innerText =
    `₹${surcharge.toFixed(2)}`;

  document.getElementById("grandTotal").innerText =
    `₹${grandTotal.toFixed(2)}`;

  document.getElementById("resultCard").style.display = "block";
});

resetBtn.addEventListener("click", () => {
  document.getElementById("units").value = "";
  document.getElementById("resultCard").style.display = "none";
});