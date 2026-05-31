const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");

const fromFlag = document.getElementById("fromFlag");
const toFlag = document.getElementById("toFlag");

const convertBtn = document.getElementById("convertBtn");

const result = document.getElementById("result");

const amount = document.getElementById("amount");

const countryList = {
  USD: "US",
  INR: "IN",
  EUR: "EU",
  GBP: "GB",
  JPY: "JP",
};



/* Updating flags  here the flag will automaticaaly update on its own*/
function updateFlag(element, currency) {
  let countryCode = countryList[currency];

  element.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
}

// changingg flags suppose we went into the select option and selected the ind currency,then it will result in changing the lag
fromCurrency.addEventListener("change", () => {
  updateFlag(fromFlag, fromCurrency.value);
});

toCurrency.addEventListener("change", () => {
  updateFlag(toFlag, toCurrency.value);
});

// currency cnverter
convertBtn.addEventListener("click", async () => {
  let amt = amount.value;

  if (amt === "" || amt <= 0) {
    amt = 1;
    amount.value = 1;
  }

  const URL = `https://api.exchangerate-api.com/v4/latest/${fromCurrency.value}`;

  let response = await fetch(URL);

  let data = await response.json();

  let rate = data.rates[toCurrency.value];

  let finalAmount = (amt * rate).toFixed(2);

  result.innerText = `${amt} ${fromCurrency.value} = ${finalAmount} ${toCurrency.value}`;
});
