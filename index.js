// Import `fs` module to enable interaction with the file system
const fs = require("fs");
// Variable that stores inquirer -  npm package
// that capture user input in Node.js command line 
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
                  'ISC',
                  'LGPLv3',
                  'AGPLv3',
                  'Mozilla',
                  'BSD 2-clause',
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
        message: 'What is your GitHub username?',
        name: 'username',  
    },
    // Questions (email)
    {
        type: 'input',
        message: 'What is your email adress?',
        name: 'email',
    },
];

// function to write README file
function writeToFile(data) {
    // "writeFile" takes in 3 arguments: path, data, and callback function
    fs.writeFile("./generated_README/README.md", generateMarkdown(data), (err) =>
       // Shortcut for the "if" statement:
       // if error: shows error message 
       // else: console.log message that file created
       err ? console.error(`Whoops.. o_O\n`
       + `Your README file was not generated`) 
       : console.log('Your README file successfully created!')
    )
}

// function to initialize program
function init() {
    // return user answers 
    return inquirer.prompt(questions)
    .then((data) => writeToFile(data))
}

// function call to initialize program
init();