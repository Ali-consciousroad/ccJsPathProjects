// Declare constant arrow function with userInput as the parameter
const getUserChoice = userInput =>
{
  userInput = userInput.toLowerCase()
  if(userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb")
  {
    return userInput;
  }
  else
  {
    return "Choice not allowed";
  }
}
// Test
// console.log(getUserChoice("test"))

// Let the computer to make the choice
function getComputerChoice(){
  num1 = Math.random();
  // Test
  // console.log(num1);
  num2 = Math.floor(num1 * 3);
  // Test
  // console.log(num2);
  switch(num2){
    case 0:
      return 'rock';
    break;
    case 1:
      return 'paper';
    break;
    case 2:
      return 'scissors';
    break;
  }
}

//nsole.log(getComputerChoice())

function determineWinner(userChoice, computerChoice)
{
/* Take care of the case were both the user and the computer select the same tool, it will make things easier for the later logic */
  if(userChoice === computerChoice)
  {
    return "tie";
  }
  else if(userChoice === "bomb")
  {
    return "User won";
  }
  else
  {
    // Rock selected by the user
    if(userChoice === "rock"){
      if(computerChoice === "paper"){
        return "Computer won";
      }
      else{
        return "User won";
      }
    }
    if(userChoice === "paper"){
      if(computerChoice === "scissors"){
        return "Computer won";
      }
      else{
        return "User won";
      }
    }
    if(userChoice === "scissors"){
      if(computerChoice === "rock"){
        return "Computer won";
      }
      else{
        return "User won";
      }
    }
  }
}

// Test
/*
console.log(determineWinner(getUserChoice("paper"), getComputerChoice()))
*/

function playGame()
{
  let userChoice = getUserChoice("Scissors");
  console.log(`User choice: ${userChoice}`);
  let computerChoice = getComputerChoice();
  console.log(`Computer choice: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame()
