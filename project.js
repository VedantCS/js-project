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


const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const numberOfLines = parseInt(lines);
        if (isNaN(numberOfLines) || numberOfLines < 1 || numberOfLines > 3) {
            console.log("Invalid number of lines. Please enter a number between 1 and 3.");
        }
        else {
            return numberOfLines; 
        }
    }

};
/*necessary to define functions above before calling them, otherwise it will throw an error
do not use const depositAmount = deposit(); before defining the function deposit() otherwise it will throw an error
functions are hoisted but not the variables, so if you define the variable before the function, it will throw an error
hoisted means that the function is moved to the top of the code, so it can be called before it is defined,*/

const depositAmount = deposit(); 
console.log(`You have deposited: $${depositAmount}`);

const numberOfLines = getNumberOfLines();
console.log(`You have chosen to bet on ${numberOfLines} lines.`);
