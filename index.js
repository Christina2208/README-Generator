// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
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
    name: 'screenshot',
    message: 'What is the relative path for the screenshot?',
},
{
    type: "input",
    name: "link",
    message: "What is the URL for users to access your deployed application?"
},
{
    type: 'checkbox',
    name: 'license',
    message: 'Choose what license was used for this project.',
    choices: ["MIT","APACHE2.0", "Mozilla2.0", "none",]
},
{
    type: 'input',
    name: 'features',
    message: 'What are some features about this project?',
},
{
    type: 'input',
    name: 'dependencies',
    message: 'What dependencies were used in this project?',
},
{
    type: 'input',
    name: 'usage',
    message: 'What languages/technologies were used in this project?',
},
{
    type: 'input',
    name: 'user',
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
    message: 'List any contributors to this project with their Github username.',
    default: "",
},
{
    type: 'input',
    name: 'tests',
    message: 'What are the tests done to this project, if applicable.'
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then((response) => {
console.log('Generating README.md file...');
writeToFile('./dist/README.md', generateMarkdown({...responses}));
});
}

// Function call to initialize app
init();
