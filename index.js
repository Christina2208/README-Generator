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
    message: 'What is the title of your project?'
},
{
    type: 'input',
    name: 'description',
    message: 'Write a short description on what this porject is about.'
},
{
    type: 'input',
    name:
    message:
},
{
    type: 'input',
    name:
    message:
},
{
    type: 'input',
    name:
    message:
},
{
    type: 'input',
    name:
    message:
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
