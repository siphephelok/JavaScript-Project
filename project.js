//STEPS FOR MY PROJECT
//1. Deposit some money
//2. Determine number of lines to bet on
//3. Collect a bet amount
//4. Spin the slot machine
//5. Check if the user won
//6. Give the user ther winnings
//7. Play again
const prompt = require("prompt-sync")(); //Importing the promt-sync library to allow the program to interactively take inputs from the user
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
const depositAmount= deposit();
console.log(depositAmount);