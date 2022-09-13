document.getElementById('btn-withdraw').addEventListener('click', function(){
    // console.log('withdraw')
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // console.log(newWithdrawAmount)


    const withdrawTotalElement = document.getElementById('withdraw-total');
    const prevWithdrawTotalElementString = withdrawTotalElement.innerText;
    const prevWithdrawTotalElement = parseFloat(prevWithdrawTotalElementString);
    // console.log(prevWithdrawTotalElement)


    const currentWithdrawTotal = prevWithdrawTotalElement + newWithdrawAmount;

    withdrawTotalElement.innerText = currentWithdrawTotal

    withdrawField.value = '';


    const balanceTotalElement = document.getElementById('balance-total');
    const prevbalanceTotalElementString = balanceTotalElement.innerText; 
    const prevbalanceTotalElement = parseFloat(prevbalanceTotalElementString);

    const newBalanceTotal = prevbalanceTotalElement - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
})