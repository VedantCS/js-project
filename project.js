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

const getBet = (balance) => {
while (true) {
    const bet = prompt("Enter the amount to bet per line: ");
    const numberBet = parseFloat(bet);

    if(isNaN(numberBet) || numberBet <= 0 || numberBet > balance/numberOfLines) {
        console.log("Invalid bet amount. Please enter a valid amount.");
    }
    else {
        return numberBet;
    }

}
};
let balance = deposit(); 
//let data type is used because the balance will change as the user plays the game,
 //so it needs to be mutable
 //let keyword is used to declare block-scoped variables that can be changed later
 //let only exist inside the immediate block {} where they are defined (e.g., inside an if statement, a loop, or a function)

console.log(`You have deposited: $${balance}`);

const numberOfLines = getNumberOfLines();
console.log(`You have chosen to bet on ${numberOfLines} lines.`);

const bet = getBet(balance, numberOfLines);
console.log(`You have placed a bet of $${bet}.`);

