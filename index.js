// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
//const questions = [];
const fs = require('fs');
const inquirer = require('inquirer');
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Describe your project (consider your motivation, the problem it solves, what you learned).',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What steps are required for installation?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'What is your project used for?',
      name: 'use',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['None', 'Apache', 'General Public License', 'MIT License', 'Creative Commons Zero', 'Mozilla Public License']
    },
    {
        type: 'input',
        message: 'Who are the project contributors?',
        name: 'contributors',
      },
      {
        type: 'input',
        message: 'Explain how to conduct any testing that is included.',
        name: 'tests',
      },
  ])

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();