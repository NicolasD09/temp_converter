let celciusInput = document.querySelector("#celcius"),
  farInput = document.querySelector("#farenheight"),
  submitBtn = document.querySelector("#submit-btn"),
  resetBtn = document.querySelector("#reset-btn");

const checkCelcius = function() {
  if (celciusInput.value.length !== 0) {
    farInput.disabled = true;
  } else if (celciusInput.value.length == 0) {
    farInput.disabled = false;
  }
};

const checkFar = function() {
  if (farInput.value.length !== 0) {
    celciusInput.disabled = true;
  } else if (farInput.value.length == 0) {
    celciusInput.disabled = false;
  }
};

let convertValue = function() {
  function isNumber(value) {
    return typeof value === "number" && isFinite(value);
  }

  if (isNumber(parseInt(celciusInput.value))) {
    farInput.value = Math.round((parseInt(celciusInput.value) * 9) / 5 + 32);
  } else if (isNumber(parseInt(farInput.value))) {
    celciusInput.value = Math.round(((parseInt(farInput.value) - 32) * 5) / 9);
  } else {
    alert("Type in a valid number");
  }
};

submitBtn.addEventListener("click", convertValue);
resetBtn.addEventListener("click", function() {
  celciusInput.value = "";
  farInput.value = "";
  checkCelcius();
  checkFar();
});
