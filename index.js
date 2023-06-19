// TODO: Include packages needed for this application
const fs = require('fs');
const inquierer = require('inquierer');
const path = require('path');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of (objects) questions for user input
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
},
{
    type: 'input',
    name: 'description',
    message: 'Write a short description on what this porject is about.',
},
{
    type: 'input',
    name: 'license',
    message: 'What license was used for this project?',
},
{
    type: 'input',
    name: 'features',
    message: 'What are some features about this project?',
},
{
    type: 'input',
    name: 'require',
    message: 'What dependencies were used in this project?',
},
{
    type: 'input',
    name: 'usage',
    message: 'What languages/technologies were used in this project?';
},
{
    type: 'input',
    name: 'GitHub User',
    message: 'What is your GitHub username?',
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
},
{
    type: 'input',
    name: 'contributors',
    message: 'List any contributors to this project with their Github username.'
},
{
    type: 'input',
    name: 'tests',
    message: 'What are the tests done to this project, if applicable.'
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
