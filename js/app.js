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


askQuestion('Do I live in Seattle?', false, 'You are correct, I live in Oklahoma.');

askQuestion('Is my favorite color blue?', true, 'My favorite color is blue. Good job.');

askQuestion('Do I like computers?', true, 'I love computers!');

askQuestion('Am I a vegan?', false, 'Correct. I am not a vegan.');

askQuestion('Am I the best developer ever?', true, 'Of course im the best developer ever!');

guessRandomNumber(4);

askQuestionMultAnswer(6, 'What am I thinking of right now?', ['coding', 'code', 'food', 'games', 'video games', 'programming']);

function askQuestion(question, answer, correctAnswerMessage)
{
  let userAnswer = prompt(question).toLowerCase();
  if (userAnswer === 'n' || userAnswer === 'no')
  {
    userAnswer = false;
  } else if (userAnswer === 'y' || userAnswer === 'yes')
  {
    userAnswer = true;
  } else
  {
    alert('It was a yes or no question doofus.');
    return;
  }
  if (userAnswer === answer)
  {
    alert(correctAnswerMessage);
    questionsRight++;
  } else
  {
    alert('ERRRRRRR');
  }
}

function guessRandomNumber(attempts)
{
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  // let attempts = 4;
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

}


function askQuestionMultAnswer(attempts, question, answers)
{
  let questionSevenResponse;
  while (attempts)
  {
    attempts--;
    questionSevenResponse = prompt(question).toLowerCase();

    for (let i = 0; i < answers.length; ++i)
    {
      if (answers[i] === questionSevenResponse)
      {
        questionsRight++;
        alert(`Correct! Here were all the answers - ${answers}`)
        return;
      }
    }
    alert('nope');

    if (attempts === 0)
    {
      alert(`You ran out of attempts. Here were the answers - ${answers}`);
    }
  }

}


alert(`Thank you for taking my quiz ${userName}. You got ${questionsRight} right!`);
