const billTotalInput = document.getElementById('billTotal');
const tipPercentageInput = document.getElementById('tipPercentage');
const tipSliderInput = document.getElementById('tip');
const tipAmountInput = document.getElementById('tipAmount');
const totalBillWithTipInput = document.getElementById('totalBillWithTip');
const errorMessage = document.getElementById('errorMessage');

function calculateTip() {

  const billTotalValue = billTotalInput.value.trim();

  const MAX_BILL_TOTAL = 1e9; // Set maximum bill total to 1 billion

  // Check if the input is a valid number
  if (!isValidNumber(billTotalValue) && billTotalValue !== '') {
    errorMessage.textContent = 'Please enter a valid number';
    clearCalculation();
    billTotalInput.classList.add('error');
    return;
  } else {
    errorMessage.textContent = '';
    billTotalInput.classList.remove('error');
  }

  const billTotal = parseFloat(billTotalInput.value);

  // Check if the bill total exceeds the maximum limit
  if (billTotal > MAX_BILL_TOTAL) {
    errorMessage.textContent = 'The bill total exceeds the maximum limit';
    clearCalculation();
    billTotalInput.classList.add('error');
    return;
  } else {
    errorMessage.textContent = '';
    billTotalInput.classList.remove('error');
  }

  const tipPercentage = parseInt(tipSliderInput.value);
  const tipAmount = (billTotal * tipPercentage) / 100;
  const totalBillWithTip = billTotal + tipAmount;

  tipPercentageInput.value = tipPercentage + '%';
  tipAmountInput.value = tipAmount.toFixed(2);
  totalBillWithTipInput.value = totalBillWithTip.toFixed(2);
}

function clearCalculation() {
  tipPercentageInput.value = '';
  tipAmountInput.value = '';
  totalBillWithTipInput.value = '';
}

function isValidNumber(value) {
  // Check if the input is a valid number (allowing for decimal points)
  return /^\d+(\.\d+)?$/.test(value);
}

billTotalInput.addEventListener('input', calculateTip);
tipSliderInput.addEventListener('input', calculateTip);
