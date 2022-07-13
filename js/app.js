'use strict';

console.log(response => response.json());
console.log(json => console.log(json));

let questionsRight = 0;

let userName = prompt('What\'s your name');
if (userName.toLowerCase() === 'adrian')
{
  alert('Wow me too! Welcome to my site Adrian.');
} else
{
  alert(`Welcome to my site ${userName}!`);
}

let question1 = prompt('Do I live in Seattle?', 'Yes or No').toLowerCase();


if (question1 === 'n' || question1 === 'no')
{
  alert('You are correct, I live in Oklahoma.');
  // console.log("correct");
  questionsRight++;
} else if (question1 === 'y' || question1 === 'yes')
{
  alert('Errrrrrrr!');
  // console.log("wrong");
} else
{
  alert('It was a yes or no question doofus.');
}

let question2 = prompt('Is my favorite color blue?', 'Yes or No').toLowerCase();


if (question2 === 'y' || question2 === 'yes')
{
  // console.log("correct");
  alert('My favorite color is blue. Good job.');
  questionsRight++;
} else if (question2 === 'n' || question2 === 'no')
{
  // console.log("wrong");
  alert('Errrrrrrr!');
} else
{
  alert('It was a yes or no question doofus.');
}

let question3 = prompt('Do I like computers?', 'Yes or No').toLowerCase();


if (question3 === 'y' || question3 === 'yes')
{
  // console.log("correct");
  alert('I love computers!');
  questionsRight++;
} else if (question3 === 'n' || question3 === 'no')
{
  // console.log("wrong");
  alert('Errrrrrrr!');
} else
{
  alert('It was a yes or no question doofus.');
}

let question4 = prompt('Am I a vegan?', 'Yes or No').toLowerCase();


if (question4 === 'n' || question4 === 'no')
{
  // console.log("correct");
  alert('Correct. I am not a vegan.');
  questionsRight++;
} else if (question4 === 'y' || question4 === 'yes')
{
  // console.log("wrong");
  alert('Errrrrrrr!');
} else
{
  alert('It was a yes or no question doofus.');
}

let question5 = prompt('Am I the best developer ever?', 'Yes or No').toLowerCase();


if (question5 === 'y' || question5 === 'yes')
{
  // console.log("correct");
  alert('Of course im the best developer ever!');
  questionsRight++;
} else if (question5 === 'n' || question5 === 'no')
{
  // console.log("wrong");
  alert('Errrrrrrr!');
} else
{
  alert('It was a yes or no question doofus.');
}

const randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 4;
let numberGuess;

while (attempts)
{
  numberGuess = Number(prompt('Guess a random number'));
  if (numberGuess === randomNumber)
  {
    questionsRight++;
    alert('You guessed right!');
    break;
  } else
  {
    attempts--;
    if (attempts <= 0)
    {
      alert(`You answered wrong too many times. The correct answer was ${randomNumber}.`);
    } else if (numberGuess > randomNumber)
    {
      alert('Too high!');
    } else if (numberGuess < randomNumber)
    {
      alert('Too low!');
    }
  }
}

attempts = 6;
let oldQuestionsRight = questionsRight;
let questionSevenResponse;
let questionSevenAnswers = ['coding', 'code', 'food', 'games', 'video games', 'programming'];
while (attempts && questionsRight === oldQuestionsRight)
{
  questionSevenResponse = prompt('What am I thinking of right now?').toLowerCase();

  for (let i = 0; i < questionSevenAnswers.length; ++i)
  {
    if (questionSevenAnswers[i] === questionSevenResponse)
    {
      questionsRight++;
      break;
    }
  }
  if (oldQuestionsRight === questionsRight)
  {
    alert("nope");
  }
}

if (attempts === 0)
{
  alert('You ran out of attempts');
} else
{
  alert('Good job you are right!');
}

alert(`Here were all the possible answers: ${questionSevenAnswers}`);


alert(`Thank you for taking my quiz ${userName}. You got ${questionsRight} right!`);
