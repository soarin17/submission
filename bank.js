let balance = 0;

function getAmount() {
  const input = document.getElementById("amount");
  const value = parseFloat(input.value);

  if (isNaN(value) || value <= 0) {
    alert("Please enter a valid amount");
    return null;
  }

  input.value = ""; // clear input
  return value;
}

function updateBalance() {
  document.getElementById("balance").innerText = balance;
}

function creditAmount() {
  const amount = getAmount();
  if (amount === null) return;

  balance += amount;
  updateBalance();
}

function debitAmount() {
  const amount = getAmount();
  if (amount === null) return;

  balance -= amount;
  updateBalance();
}