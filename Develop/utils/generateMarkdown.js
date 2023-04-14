
// Renders license badge
function renderLicenseBadge(license) {
  if (license !== "No License") {
    return `![Badge](https://img.shields.io/badge/License-${license}-blue.svg)`
// returns empty string if there is no license
  } else {
    return ``;
  }
}


// renders license link and returns empty string if no license selected
function renderLicenseLink(license) {
  if (license !== "No License") {
    return `- [License](#License)`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "No License") {
    return `## License
    This application is covered by the ${license} license.`
  }
  return ``;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.projectDescription}

  ## Table of Contents
  - [Usage](#usage)
  - [Installation](#installation)
  - [Questions](#questions)
  - [Test](#Test)
  - [Contributing](#contributing)
  ${renderLicenseLink(data.license)}
  
  
  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Installation
  ${data.installation}

  ## Test
  ${data.test}

  ## Contributing
  ${data.contributing}

  ## Questions
  Contact me with any additional questions here: ${data.email}
  Check out my GitHub here: ${data.username}

`;
}

module.exports = generateMarkdown;
