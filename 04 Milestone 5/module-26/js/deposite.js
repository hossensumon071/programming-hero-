
// step-1 add event listener to the deposite button
document.getElementById('btn-deposite').addEventListener('click', function(){
    // console.log('depoite button clicked')
    // step-2 get the deposite amount from the deposite input field
    // for input field use .value to the vlue inside the input field
    const depositField = document.getElementById('depsoite-feild');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(depositAmount);

    // setp-3 get the current deposite total
    // for non-input(element other then input, textarea) use innerText to get the text
    const depositTotalAmount = document.getElementById('deposit-total');
    const pervousDepositTotalString = depositTotalAmount.innerText;
    const pervousDepositTotal = parseFloat(pervousDepositTotalString);
    // console.log(depositTotal)

    // step-4 add numbers to set the total deposite 
    const currentDepositTotal = pervousDepositTotal + newDepositAmount;
    depositTotalAmount.innerText = currentDepositTotal; 

    // step-5 get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const prevoiusBalanceTotalString = balanceTotalElement.innerText; 
    const prevoiusBalanceTotal = parseFloat(prevoiusBalanceTotalString);

    // step-6 calculate the total current balance 
   const currentBalanceTotal = prevoiusBalanceTotal + newDepositAmount
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    // step-7 clear the deposite filed
    depositField.value = '';
})