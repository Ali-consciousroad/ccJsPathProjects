let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];
let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// 1. Split the String into an array of words
let storyWords = story.split(" ");

//console.log(storyWords);

// 2. Low the number of words in the array
// console.log(storyWords.length);

// 3. Iterate over the array to remove all words from the unnecessaryWords array
// My Answer
/*
let betterWords = storyWords.filter(word => {
  storyWords.includes(['extremely', 'literally', 'actually'])});
  */

// The solution 
/*
let betterWords = storyWords.filter(function(word){
  return !unnecessaryWords.includes(word)
})
console.log(betterWords.length)
console.log(betterWords)
*/

// Solution improved with arrow function 

let betterWords = storyWords.filter(word => 
  !unnecessaryWords.includes(word));

console.log(betterWords.length);
console.log(betterWords);

// 4. Let the user know how many time tey have used the overused words. 
let totalOverused = storyWords.filter(word => overusedWords.includes(word));
console.log(totalOverused);
numberOverUsed = totalOverused.length;


// 5. Count how many sentences are in the paragraph
let sentences = 0;
storyWords.forEach(word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentences+=1;
    
    // Test - Word count
    // console.log(word);
    // Test - Sentence count
    // console.log(sentences);
  }
});

// 6. 
console.log(`We have ${storyWords.length} words in this array.`);
console.log(`We have ${sentences} sentences in this array.`);
console.log(`The overused words are used ${numberOverUsed} times.`);

// 7. Join the words of the betterWords array into one sentence.
console.log(betterWords.join(" "));














