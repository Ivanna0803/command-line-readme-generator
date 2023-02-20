// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectTitle}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing 
  ${data.contributing}

  ## Tests
  ${data.test}

  ## Questions
  ${data.username}
  ${data.email}
`;
}

module.exports = generateMarkdown;
