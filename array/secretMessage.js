let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// 1. Remove the last string
secretMessage.pop();

console.log(secretMessage);

// 2. Give the message length
console.log(secretMessage.length);

// 3. Add 'to' and 'program'
secretMessage.push('to', 'program');
console.log(secretMessage);

// 4. Change the 7th word by the word "right"
secretMessage[7] = "right";
console.log(secretMessage);

// 5. Remove the first string
secretMessage.shift();
console.log(secretMessage);

// 6. Use an array method to add the string "Programming" to the beginning of the array
secretMessage.unshift("Programming");
console.log(secretMessage);

// 7. Use an array method to remove the strings get, right, the, first, time, and replace them with the single string know,.
secretMessage.splice(6, 5, "know");
console.log(secretMessage);

// 8.
console.log(secretMessage.join(' '));
