function getSleepHours(day)
{
  var hoursSlept;
  switch(day)
  {
    case 'Monday':
    hoursSlept = 6;
    break;

    case 'Tuesday':
    hoursSlept = 7;
    break;

    case 'Wednsday':
    hoursSlept = 7;
    break;

    case 'Thursday':
    hoursSlept = 8;
    break;

    case 'Friday':
    hoursSlept = 6;
    break;

    case 'Saturday':
    hoursSlept = 6;
    break;

    case 'Sunday':
    hoursSlept = 7.5;
    break;
  }
  return hoursSlept;
}
// Test
// console.log(getSleepHours('Sunday'))

// Sum the hours of sleep for all the week
/* Arrow function instead of a named function */
let getActualSleepHours = sum =>
  sum = getSleepHours("Monday")
  + getSleepHours("Tuesday")
  + getSleepHours("Wednsday")
  + getSleepHours("Thursday")
  + getSleepHours("Friday")
  + getSleepHours("Saturday")
  + getSleepHours("Sunday");

// Test
console.log(getActualSleepHours())

// Return the ideal number of sleep hours per week
let getIdealSleepHours = hours =>
{
  return hours * 7;
};
// Test
console.log(getIdealSleepHours(8));

let calculateSleepDebt = () =>
{
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours(8.5);
  if(actualSleepHours === idealSleepHours)
  {
    console.log('The user got the perfect amount of sleep.');
  }
  else if(actualSleepHours > idealSleepHours)
  {
    console.log('The user got more sleep than needed.');
  }
  else
  {
    console.log('The user should get some rest.');
    console.log(`The sleep debt is ${idealSleepHours - actualSleepHours} hours.`)
  }
}

calculateSleepDebt();
