const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Initialize an object to store the user's answers
const answers = {};
const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];

// Define a function to ask the questions recursively
function askQuestion(i) {
  rl.question(questions[i] + ' ', (answer) => {
    answers[i] = answer;
    if (i < questions.length - 1) {
      askQuestion(i + 1);
    } else {
      const profile = `${answers[0]} likes to ${answers[1]} while listening to ${answers[2]}. Their favorite meal is ${answers[3]} and their favorite thing to eat for that meal is ${answers[4]}. They also enjoy playing ${answers[5]} and their superpower is ${answers[6]}.`;
      console.log(profile);

      // Close the readline interface to exit the program
      rl.close();
    }
  });
}

askQuestion(0);