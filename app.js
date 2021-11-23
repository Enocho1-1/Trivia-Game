// Array of objects with Question and Answer key-value pairs
const questions = [
  {inqury:'Hg is the chemical symbol of which element?', answers:'mercury'},
  {inqury:' Which email service is owned by Microsoft? ',answers:'hotmail'},
  {inqury:' What was the first state?',answers:'delaware'},
  {inqury:'What is the capital city of Spain?',answers:'madrid'},
  {inqury:'What is the painting “La Gioconda” more usually known as?',answers:'mona lisa'},
  {inqury:'What is Chandler’s last name in the sitcom Friends?',answers:'bing'}

];

//Correct answer counter 
let correctAnswers = 0;
// Array will hold questions answered correctly
let correct = [];
// Array will hold questions answered incorrectly
let incorrect = [];
// Variable for ranking
let rank;


// For.. Of loop iterates through the questions array 
for(let x of questions){
  let question = x.inqury;
  let answer = x.answers;
  let userInput = prompt(question);

  if( userInput.toLowerCase() === answer){
    correctAnswers++;
    correct.push(question);
  } else {
    incorrect.push(question);
  }

}

// Function that ranks user according to number of correct answers 
function ranker(){
  if( correctAnswers >= 6){
    rank = 'Gold Rank';
  } else if( correctAnswers >= 4){
    rank = 'Silver Rank';
  } else if(correctAnswers >= 2){
    rank = 'Bronze Rank';
  } else {
    rank = 'No Rank';
  }
  return rank;
}

// Function that takes in correct/incorrect array and creates list items
function createListItem(arr){
  let msg = '';
  for(let i = 0; i < arr.length; i++){
    msg += `<li>${arr[i]}</li>`;
  }
  return msg;
}
// Output message to  document object
document.body.innerHTML = `<h1>Thank you for playing the triva game! The number of correct question(s) you got was <strong>${correctAnswers}</strong>, so your ranking is <strong>${ranker()}</strong> </h1>
<h1>Correct Questions:</h1>
<ol>${createListItem(correct)}</ol>
<h1>Incorrect Questions:</h1>
<ol>${createListItem(incorrect)}</ol>`;
