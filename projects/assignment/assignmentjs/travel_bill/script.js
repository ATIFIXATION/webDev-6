let kmInput = document.getElementById("kmInput");
let calcBtn = document.getElementById("calcBtn");
let warnMsg = document.getElementById("warnMsg");
let resultCard = document.getElementById("resultCard");
let totalBill = document.getElementById("totalBill");
let breakArea = document.getElementById("breakArea");

calcBtn.addEventListener("click", function () {
  let kms = parseFloat(kmInput.value);

  if (kmInput.value.trim() === "" || isNaN(kms) || kms < 0) {
    warnMsg.innerText = "Please enter a non-negative number of kilometres";

    resultCard.classList.add("d-none");

    return;
  }

  warnMsg.innerText = "";

  let firstSlab = 0;
  let secondSlab = 0;
  let thirdSlab = 0;

  if (kms <= 10) {
    firstSlab = kms;
  } else if (kms <= 50) {
    firstSlab = 10;
    secondSlab = kms - 10;
  } else {
    firstSlab = 10;
    secondSlab = 40;
    thirdSlab = kms - 50;
  }

  let firstCost = firstSlab * 11;
  let secondCost = secondSlab * 10;
  let thirdCost = thirdSlab * 8;

  let finalBill = firstCost + secondCost + thirdCost;

  totalBill.innerText =
    "Rs. " +
    finalBill.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  breakArea.innerHTML = `
    <div class="break-item">
      <span>
        ${firstSlab} km × Rs.11
      </span>

      <span>
        Rs. ${firstCost.toLocaleString("en-IN", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </span>
    </div>

    <div class="break-item">
      <span>
        ${secondSlab} km × Rs.10
      </span>

      <span>
        Rs. ${secondCost.toLocaleString("en-IN", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </span>
    </div>

    <div class="break-item">
      <span>
        ${thirdSlab} km × Rs.8
      </span>

      <span>
        Rs. ${thirdCost.toLocaleString("en-IN", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </span>
    </div>
  `;

  resultCard.classList.remove("d-none");
});
