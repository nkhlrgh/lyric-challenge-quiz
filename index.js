var readlineSync = require('readline-sync');

var userName = readlineSync.question("What is your name? ");

var welcomeMessage = "Welcome, " + userName + "! Can you complete these lyrics? ";

console.log(welcomeMessage);

var userScore = 0;

var highscoreOne = {
  name: 'Nikhil',
  score: 5
};

var highscoreTwo = {
  name: 'Indira',
  score: 4
};

var highscoreThree = {
  name: 'Vishal',
  score: 3
};

var highscores = [highscoreOne, highscoreTwo, highscoreThree];

var questionOne = {
  question: 'And I said, ooh, I\'m _______ by the lights ',
  answer: 'blinded'
};

var questionTwo = {
  question: 'I\'m gonna take my _____ to the ___ town ____ ',
  answer: 'horse old road'
};

var questionThree = {
  question: 'I love it when you call me ________? ',
  answer: 'senorita'
};

var questionFour = {
  question: 'Switchin\' the ________ for you ',
  answer: 'positions'
};

var questionFive = {
  question: 'Baby, I\'m dancing in the ____ with you _______ my arms ',
  answer: 'dark between'
};

var questionBank = [questionOne, questionTwo, questionThree, questionFour, questionFive];

function play() {
  for(var i=0;i<=questionBank.length-1;i++) {
    var current = questionBank[i];
    check(current.question, current.answer);
}

function check(question, answer) {
  var userAns =  readlineSync.question(question);
    if(userAns.split(" ").join("").toLowerCase() === answer.split(" ").join("").toLowerCase()) {
      console.log("You're right ");
      userScore = userScore + 1;
    } else {
      console.log("You're wrong");
    } console.log("Your current score is: " + userScore);
  }
}

play();

console.log("You have completed the quiz! Your score is: " + userScore);

console.log("Have you beaten the highscores? Send me a screenshot to get it updated ");

function displayScore() {
  for(var i=0;i<=highscores.length-1;i++) {
    var selectScore = highscores[i];
    console.log(selectScore.name, selectScore.score);
  }
}

displayScore();
