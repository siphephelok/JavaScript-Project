//STEPS FOR MY PROJECT
//1. Deposit some money
//2. Determine number of lines to bet on
//3. Collect a bet amount
//4. Spin the slot machine
//5. Check if the user won
//6. Give the user ther winnings
//7. Play again
const prompt = require("prompt-sync")(); //Importing the promt-sync library to allow the program to interactively take inputs from the user

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8
}

const SYMBOL_VALUES = {
  A: 5,
  B: 4,
  C: 3,
  D: 2
}

const deposit = () =>{ //Declaring constant function
  while(true){ //Initiate an infinite loop considering the condition is true
    const depositAmount = prompt("Enter a deposit amount: ");//Prompt message and waits for the user to input a value
    const numberDepositAmount = parseFloat(depositAmount);//Converting user input to a floating-point number

    if(isNaN(numberDepositAmount) || numberDepositAmount <= 0){ //Checks if the value provided is not a valid number
      console.log("Invalid deposit amount, try again."); //If the if statements evaluates to True this line prints
    }else{//If the user puts a number greater than 0
      return numberDepositAmount; //Returns the valid amount
    }//Close else block
  }//End while loop
};

const getNumberOfLines = () => {
  while(true){ //Initiate an infinite loop considering the condition is true
    const lines = prompt("Enter a number Of Lines to bet on (0-3): ");//Prompt message and waits for the user to input a value
    const numberOfLines = parseFloat(lines);//Converting user input to a floating-point number

    if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){ //Checks if the value provided is not a valid number
      console.log("Invalid number of lines entered, try again."); //If the if statements evaluates to True this line prints
    }else{//If the user puts a number greater than 0
      return numberOfLines; //Returns the valid lines
    }//Close else block
  }//End while loop
};

const getBet = (balance, lines) => {
  while(true){ //Initiate an infinite loop considering the condition is true
    const bet = prompt("Enter the total bet per line: ");//Prompt message and waits for the user to input a value
    const numberBet = parseFloat(bet);//Converting user input to a floating-point number

    if(isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines){ //Checks if the value provided is not a valid number
      console.log("Invalid bet, try again."); //If the if statements evaluates to True this line prints
    }else{//If the user puts a number greater than 0
      return numberBet; //Returns the valid lines
    }//Close else block
  }//End while loop
};

const spin = () => {
  const symbols = [];
  for(const[symbol, count] of Object.entries(SYMBOLS_COUNT)){
    for(let i = 0; i < count; i++){
      symbols.push(symbol);
    }
  }
  const reels = [[], [], []];
  for(let i = 0; i < COLS; i++){
    const reelSymbols = [...symbols];
    for(let j = 0; j < ROWS; j++){
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      const selectedSymbols = reelSymbols[randomIndex];
      reels[i].push(selectedSymbols);
      reelSymbols.splice(randomIndex, 1);
    }
  }

  return reels;
};
const reels = spin();
console.log(reels);
let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
