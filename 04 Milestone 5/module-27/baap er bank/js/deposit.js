

document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('deposit button clicked')
    const depositField = document.getElementById('deposit-field');
    const newDepsitAmountString = depositField.value;
    const newDepsitAmount = parseFloat(newDepsitAmountString);

    depositField.value = '';

    const depositTotalElement = document.getElementById('deposit-total');
    const previousdepositTotalString = depositTotalElement.innerText; 
    const previousdepositTotal = parseFloat(previousdepositTotalString);

    const newDepositTotal = previousdepositTotal + newDepsitAmount ; 
    depositTotalElement.innerText = newDepositTotal;

    const balanceTotalElement = document.getElementById('Balance-total'); 
    const previousbalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousbalanceTotalString);

    const newBalanceTotal = previousBalanceTotalAmount + newDepsitAmount; 

    balanceTotalElement.innerText = newBalanceTotal
})