document.getElementById('btn-withdraw').addEventListener('click', function(){
    // console.log('hello withdraw')

    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    // console.log('new withdraw amount');
    const previousWithdrawTotal = getElementValueByID('withdraw-total');

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount; 
    setTextElementvalueById('withdraw-total', newWithdrawTotal);

    const previousBalanceTotal = getElementValueByID('Balance-total');

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount ; 
    setTextElementvalueById('Balance-total', newBalanceTotal);
})