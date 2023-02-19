const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    // The title of project
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'projectTitle',
    },
    // Project description
    {
        type: 'input',
        message: 'Describe your project:',
        name: 'description',  
    },
    // Installation 
    {
        type: 'input',
        message: 'Provide a instruction how to install your project:',
        name: 'installation',  
    },
    // Usage 
    {
        type: 'input',
        message: 'Describe how to use this project:',
        name: 'usage',  
    },
    // License
    {
        type: 'list',
        message: 'Select the type of the license you used for the project?',
        name: 'license', 
        choices: ['MIT', 
                  'GPLv2', 
                  'Apache', 
                  'GPLv3',
                  'BSD 3-clause',
                  'BSD 2-clause',
                  'LGPLv3',
                  'AGPLv3',
                  'Other',
                  'Unlicense',
                ], 
    },
    // Contributing
    {
        type: 'input',
        message: 'How to contribute to this project?',
        name: 'contributing',  
    },
    // Tests
    {
        type: 'input',
        message: 'Provide test instructions for this application:',
        name: 'test',  
    },
    // Questions (username)
    {
        type: 'input',
        message: 'What is your username?',
        name: 'username',  
    },
    // Questions (email)
    {
        type: 'input',
        message: 'What is your email adress?',
        name: 'email',
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
