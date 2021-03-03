let raceNumber = Math.floor(Math.random() * 1000);

console.log(raceNumber);

let earlyRegistered = true;

let age = 18;

console.log(earlyRegistered);

if(earlyRegistered == true && age > 18)
{
  raceNumber += 1000;
  }

if(age > 18 && earlyRegistered == true)
{
  console.log(`Number: ${raceNumber}, you will race at 9:30 am.`)
}

else if(age > 18 && !earlyRegistered)
{
  console.log(`Number ${raceNumber}, you will race at 11:00 am.`)
}

else if(age < 18)
{
  console.log(`Number ${raceNumber}, you will race at 12:30 pm.`)
}

else
{
  console.log("Please see the registration desk asap.")
}
