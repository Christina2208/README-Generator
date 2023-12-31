// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license){
        case 'MIT' :
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        case 'Apache 2.0' :
            return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        case 'Mozilla 2.0' :
            return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
        default:
            return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license){
        case 'MIT' :
            return '(https://opensource.org/licenses/MIT)';
        case 'Apache 2.0' :
            return '(https://opensource.org/licenses/Apache-2.0)';
        case 'Mozilla 2.0' :
            return '(https://opensource.org/licenses/MPL-2.0)';
        default:
            return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license){
        return `## License 
        ${license} license is used for this porject.`;
    } else {
        return '';
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Deployed Application URL
${data.link}
## Screenshot
![alt-text](${data.screenshot})
## Table of Contents
*[Features](#features)
*[Usage](#usage)
*[Dependencies](#dependencies)
*[Contributors](#contributors)
*[Tests](#tests)
*[GitHub](#user)
*[Questions](#email)
## Features
${data.features}
## Usage
${data.usage}
## Dependencies
${data.dependencies}
## Contributors
${data.contributors}
## Tests
${data.tests}
## GitHub
${data.user}
## Questions
Send all your questions [here](mailto:${data.email})
`;
}

module.exports = generateMarkdown;