// Function to show license badge based on user choice
function displayLicenseBadge(data) {
  if (data.license === "MIT") {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } 
  else if (data.license === "GPLv2") {
      return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  }
  else if (data.license === "Apache") {
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  else if (data.license === "GPLv3") {
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;   
  }
  else if (data.license === "ISC") {
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  }
  else if (data.license === "LGPLv3") {
      return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;    
  }
  else if (data.license === "AGPLv3") {
      return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
  }
  else if (data.license === "Mozilla") {
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  }
  else if (data.license === "BSD 2-clause") {
      return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;  
  }
  else if (data.license === "Unlicense") {
      return `No License`;  
  }
  else {
    return "";
  }
}

// function to generate markdown for README
// based on user answers
function generateMarkdown(data) {
  return `
# ${data.projectTitle}
${displayLicenseBadge(data)}

## Description
${data.description}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
  
## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license. 

## Contributing 
${data.contributing}

## Tests
${data.test}

## Questions
If you have any questions about the repo, open an issue or contact me directly at ${data.email}. 
You can find more of my work at [github.com/${data.username}](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown; 