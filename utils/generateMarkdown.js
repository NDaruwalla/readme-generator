// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Use](#use)
  - [License](#license)
  - [Contributors](#contributors)
  - [References](#references)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Use
  ${data.use}

  ## License
  ${data.license}

  ## Contributors
  ${data.contributors}

  ## References
  ${data.references}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}

  Contact me on GitHub:
  [${data.username}] (https://github.com/${data.username})
  
  Or, contact me via email:${data.email}
`;
}

module.exports = generateMarkdown;
