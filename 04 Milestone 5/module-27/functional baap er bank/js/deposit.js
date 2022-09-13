function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const getInputFieldValueString = inputField.value;
    const getInputFieldValue = parseFloat(getInputFieldValueString);
    inputField.value = '';
    return getInputFieldValue;
}

function getElementValueByID(elementById){
    const element = document.getElementById(elementById);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

function setTextElementvalueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue; 
}

document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('deposit btn cicked')


    const newDepositAmount = getInputFieldValueById('deposit-field');

    const previousDepositAmount = getElementValueByID('deposit-total');

    const newDepositTotal  = previousDepositAmount + newDepositAmount;

    setTextElementvalueById('deposit-total', newDepositTotal)

    const previousBalanceTotal = getElementValueByID('Balance-total')

    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementvalueById('Balance-total', newBalanceTotal)
})