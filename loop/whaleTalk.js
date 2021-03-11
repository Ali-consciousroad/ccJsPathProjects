let input = 'a whale of a deal!';
/*"They are either your brothers in faith or your equals in humanity";*/
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];
// Count the number of characters in your input string
for(i = 0; i < input.length; i++){
  //console.log(i);
  // Nested loop
  /* Don't forget the break otherwise we will push the  vowels as many time as there is letter in vowels */
  for(j = 0; j < vowels.length; j++){
    //console.log(j);
    if(input[i] === 'a'){
      resultArray.push('a'.toUpperCase());
      break;
    }
    if(input[i] === 'i'){
      resultArray.push('i'.toUpperCase());
      break;
    }
    if(input[i] === 'o'){
      resultArray.push('o'.toUpperCase());
      break;
    }
    if(input[i] === 'e'){
      resultArray.push('ee'.toUpperCase());
      break;
    }
    if(input[i] === 'u'){
      resultArray.push('uu'.toUpperCase());
      break;
    }
  }
}
resultArray = resultArray.join('')
console.log(resultArray)
