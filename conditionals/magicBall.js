// Magic Eight Ball project

let userName = "Jane";

userName == 'Jane' ? console.log('Hello, ' + userName) : console.log('Hello!');

userQuestion = "What's up?";

console.log(`The user asked: ${userQuestion}`);

randomNumber = Math.floor(Math.random()*8);

console.log(randomNumber);

eightBall = "";

switch(randomNumber){
  case 1:
    eightBall = "It is certain";
    break;
  case 2:
    eightBall = "It is decidely so";
    break;
  case 3:
    eightBall = "Reply hazy try again";
    break;
  case 4:
    eightBall = "Cannot predict now";
    break;
  case 5:
    eightBall = "Do not count on it";
    break;
  case 6:
    eightBall = "My sources say no";
    break;
  case 7:
    eightBall = "Outlook not so good";
    break;
  case 8:
    eightBall = "Signs point to yes";
    break;
}

console.log(eightBall);
