document.getElementById('btn-withdraw').addEventListener('click', function(){
    // console.log('hello')
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawFieldString = withdrawField.value;
    const newWithdrawField = parseFloat(newWithdrawFieldString);

    withdrawField.value = '';


    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const newWithdarwTotal = previousWithdrawTotal + newWithdrawField ;
    withdrawTotalElement.innerText = newWithdarwTotal; 


    const balanceElement  = document.getElementById('Balance-total');
    const prevousBalanceElementString = balanceElement.innerText;
    const prevousBalanceElement = parseFloat(prevousBalanceElementString);

    const newBalanceTotal = prevousBalanceElement - newWithdrawField
    balanceElement.innerText = newBalanceTotal
})