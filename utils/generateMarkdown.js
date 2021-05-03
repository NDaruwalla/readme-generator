// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}
  //![badge](https://img.shields.io/badge/license-${data.license}
  //https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba 

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {

  function renderLicenseBadge() {
    this.urlForBadge;
  
    if (data.license === 'None') {
      urlForBadge = ' ';
     };
     
    if (data.license === 'Apache') {
      urlForBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)  Click badge for license description.';
    };
  
    if (data.license === 'Boost') {
      urlForBadge = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)  Click badge for license description.';
    };
  
    if (data.license === 'Creative Commons') {
      urlForBadge = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)  Click badge for license description.';
    };

    if (data.license === 'GNU') {
      urlForBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)  Click badge for license description.';
    };
  
    if (data.license === 'MIT') {
      urlForBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  Click badge for license description.';
    };
  
    if (data.license === 'IBM') {
      urlForBadge = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)  Click badge for license description.';
    };
  
    if (data.license === 'Mozilla') {
      urlForBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)  Click badge for license description.';
    };

    return urlForBadge;
    };

  //## License
  renderLicenseBadge();

  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [User Story/Stories](#story)
  - [Acceptance Criteria](#criteria)
  - [Tools](#tools)
  - [Installation](#installation)
  - [Use](#use)
  - [License](#license)
  - [Contributors](#contributors)
  - [References](#references)
  - [Tests](#tests)
  - [Questions](#questions)

  ## User Story/Stories
  ${data.story}

  ## Acceptance Criteria
  ${data.criteria}

  ## Tools
  The tools used to create this application include: ${data.tools}

  ## Installation
  ${data.installation}

  ## Use
  ${data.use}

  ## License
  ${data.license}
  
  ${urlForBadge}
  
  ## Contributors
  ${data.contributors}

  ## References
  The following references were used to create this application: ${data.references}

  ## Tests
  ${data.tests}

  ## Questions
  If you have questions or need help with this application:

    Contact me on GitHub:
    [${data.username}] (https://github.com/${data.username})
  
    Or, contact me via email:${data.email}
`;
};

module.exports = generateMarkdown;
