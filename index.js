// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
//const questions = [];
// The responses to these questions will populate the readme file
//https://www.w3schools.com/nodejs/nodejs_filesystem.asp
//https://nodejs.org/api/util.html#util_util
//https://www.npmjs.com/package/inquirer#methods
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
//![badge](https://img.shields.io/badge/license-${data.license}

const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser(){
  return inquirer.prompt([
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
      message: 'Describe your project user story/stories (AS A, I WANT, SO THAT).',
      name: 'story',
    },
    {
      type: 'input',
      message: 'Describe your project acceptance criteria (GIVEN, WHEN, THEN, WHEN, THEN).',
      name: 'criteria',
    },
    {
      type: 'input',
      message: 'What tools did you use to create the project?',
      name: 'tools',
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
      message: 'Choose a license for your project.',
      choices: [
        'None',
        'Apache',
        'Boost', 
        'Creative Commons',
        'GNU',
        'MIT', 
        'IBM', 
        'Mozilla'
        ]
    },
      {
        type: 'input',
        message: 'Who are the project contributors?',
        name: 'contributors',
      },
      {
        type: 'input',
        message: 'List any references you used to create your project (sites, books, videos).',
        name: 'references',
      },
      {
        type: 'input',
        message: 'Explain how to conduct any testing that is included.',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      }
  ]);
}


// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
//function init() {}
async function init(){
  try {
    const data = await promptUser();
    const createFile = generateMarkdown(data);
    await writeFileAsync('./README.md', createFile);
    console.log('Your README document was successfully written!');
  } catch(err) {
    console.log(err);
  }
}
// Function call to initialize app
init();
