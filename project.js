//function deposit() {}
//another newer way to write the function es6 style

const prompt=require("prompt-sync")();

const deposit = () => {
    while (true) {
    const depositAmount = prompt("Enter the amount to deposit: ");
    const numberDepositAmount = parseFloat(depositAmount);
    
    if(isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
    console.log("Invalid deposit amount. Please enter a valid amount.");
    }
    else{
        return numberDepositAmount;//breaksthe while loop 
    }

}};
const depositAmount = deposit();
console.log(`You have deposited: $${depositAmount}`);

