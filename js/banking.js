document.getElementById('deposit-button').addEventListener('click',function(){
    const dipositInput = document.getElementById('deposit-input');
    const newDipositText = dipositInput.value;
    const newDepositAmount = parseFloat(newDipositText);
    const dipositTotal = document.getElementById('deposit-total');
    const previousDepositText = dipositTotal.innerText;
    // const newDipositTotal =parseFloat( previousDepositAmount)+ parseFloat(newDipositAmount);
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDipositTotal = previousDepositAmount + newDepositAmount;


    dipositTotal.innerText = newDipositTotal;

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    dipositInput.value = '';
})

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);

    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;

    // clear withdraw input
    withdrawInput.value = '';
})