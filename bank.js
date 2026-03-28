let balance = 0;

function getAmount() {
  let value = document.getElementById("amount").value;

  if (value > 0) {
    document.getElementById("amount").value = "";
    return Number(value);
  } else {
    alert("Enter a value greater than 0");
    return null;
  }
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

  if (amount > balance) {
    alert("too broke");
    return;
  }

  balance -= amount;
  updateBalance();
}
