//function deposit=() =>{};
//another newer way to write the function es6 style

const prompt=require("prompt-sync")();
const ROWS=3;
const COLS=3;
// A javascript object is a collection of key-value pairs aka entries, where each key is a string (or symbol)
// and each value can be any data type, including other objects or functions. Objects are used to 
// store and organize data in a structured way, allowing for easy access and manipulation of the data they contain.

const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8
};

const SYMBOLS_VALUES = {
    A: 5,
    B: 4,
    C: 3,
    D: 2
};

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

const spin =() => {
//notice how symbols array is created to store the symbols that will be generated for each column of the slot machine.
//but it is const, so how??  Because in js array is a reference type, so the reference to the array cannot be changed
// but the contents of the array can be modified. means we can add, remove, or change elements within the array, 
// but we cannot reassign the symbols variable to a new array or a different value.

const symbols = [];
for(const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    symbols.push(...Array(count).fill(symbol));
    //so Array(count) say Array(2) creates an array with 2 empty slots, then fill(symbol) fills those slots with the symbol,
    //spread operator (...) lets push() receive the individual elements rather than the whole array.
    //so symbols.push(["A", "A"]); gives [["A", "A"]] but symbols.push(...["A", "A"]); gives ["A", "A"]
    //we could also use symbols.push.apply(symbols, Array(count).fill(symbol)); instead of spread operator
    //or for(let i=0; i<count; i++) { symbols.push(symbol); } is simple version


}
const reels = [[], [], []];
for(let i = 0; i < COLS; i++) {
    const reelSymbols = [...symbols];
    for(let j = 0; j < ROWS; j++) {
        const randomIndex=Math.floor(Math.random() * reelSymbols.length);
        //Math.random() is a built-in static method that returns a floating-point, pseudo-random decimal number
        //  that is greater than or equal to 0 and strictly less than 1
        const selectedSymbol= reelSymbols.splice(randomIndex, 1)[0];
    //used .splice() to remove the selected symbol from the reelSymbols array, so it cannot be selected again for the same column.
//1 means remove 1 element at the 'randomIndex", position in the array, and it returns an array containing the removed element(s),
 //and [0] is used to get the first (and only) element from the array returned by splice().    
    reels[i].push(selectedSymbol);
    }

}
return reels;};

const reels = spin(); console.log(reels);

let balance = deposit(); 
//let data type is used because the balance will change as the user plays the game,
 //so it needs to be mutable
 //let keyword is used to declare block-scoped variables that can be changed later
 //let only exist inside the immediate block {} where they are defined (e.g., inside an if statement, a loop, or a function)

console.log(`You have deposited: $${balance}`);

/*Function declarations are hoisted, so they can be called before they appear in the code.
let and const declarations are hoisted too, but they cannot be accessed before their declaration because of the Temporal Dead Zone (TDZ).
var is hoisted and initialized with undefined, so it can be accessed before its declaration, although this can lead to confusing behavior.
Function expressions and arrow functions assigned to let or const cannot be called before their declaration.
Hoisting means that JavaScript makes certain declarations available during the creation of 
the execution context before the code is executed.
TDZ is the period between when a let or const variable is created/hoisted and when it is initialized by its declaration.
During that period, you cannot access the variable.*/

const numberOfLines = getNumberOfLines();
console.log(`You have chosen to bet on ${numberOfLines} lines.`);

const bet = getBet(balance, numberOfLines);
console.log(`You have placed a bet of $${bet}.`);

