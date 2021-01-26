// Login Button Even Handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  const loginArea = document.getElementById("loginArea");
  loginArea.style.display = "none";
  const transactionArea = document.getElementById("transactionArea");
  transactionArea.style.display = "block";
});

// Deposit Button Even Handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
  const depositAmount = document.getElementById("depositAmount").value;
  const depositNumbers = parseFloat(depositAmount);
  updateSpanText("currentDeposit", depositNumbers);
  updateSpanText("currentBalance", depositNumbers);

  document.getElementById("depositAmount").value = "";
});
// Withdraw Button Even Handler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function () {
  const withdrawNumbers = getInputNumber("withdrawAmount");
  updateSpanText("currentWithdraw", withdrawNumbers);
  updateSpanText("currentBalance", -1 * withdrawNumbers);
  document.getElementById("withdrawAmount").value = "";
});

function getInputNumber(id) {
  const amount = document.getElementById(id).value;
  const amountNumbers = parseFloat(amount);
  return amountNumbers;
}

function updateSpanText(id, depositNumbers) {
  const current = document.getElementById(id).innerText;
  const currentNumbers = parseFloat(current);
  const totalAmount = depositNumbers + currentNumbers;
  document.getElementById(id).innerText = totalAmount;
}
