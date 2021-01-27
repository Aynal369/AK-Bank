// Login Button Even Handler
const loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", function () {
  const loginArea = document.getElementById("loginArea");
  loginArea.style.display = "none";
  const transactionArea = document.getElementById("transactionArea");
  transactionArea.style.display = "block";
});
// Deposit Button Even Handler
const depositBtn = document.getElementById("depositBtn");
depositBtn.addEventListener("click", function () {
  const depositAmount = document.getElementById("depositAmount").value;
  const depositNumber = parseFloat(depositAmount);
  updateSpanText("currentDeposit", depositNumber);
  updateSpanText("currentBalance", depositNumber);
  document.getElementById("depositAmount").value = "";
});
// Withdraw Button Even Handler
const withdrawBtn = document.getElementById("withdrawBtn");
withdrawBtn.addEventListener("click", function () {
  const withdrawNumber = getInputNumber("withdrawAmount");
  updateSpanText("currentWithdraw", withdrawNumber);
  updateSpanText("currentBalance", -1 * withdrawNumber);
  document.getElementById("withdrawAmount").value = "";
});
// My Function
function getInputNumber(id) {
  const amount = document.getElementById(id).value;
  const amountNumber = parseFloat(amount);
  return amountNumber;
}
function updateSpanText(id, depositNumber) {
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const totalAmount = depositNumber + currentNumber;
  document.getElementById(id).innerText = totalAmount;
}
