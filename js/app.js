'use strict';

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

alert(`Thank you for taking my quiz ${userName}. You got ${questionsRight} right!`);








