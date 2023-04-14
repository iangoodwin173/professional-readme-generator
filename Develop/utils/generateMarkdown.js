
// Renders license badge
function renderLicenseBadge(licenseType) {
  if (licenseType !== "No License") {
    return `![Badge](https://img.shields.io/badge/License-${licenseType}-blue.svg)`
// returns empty string if there is no license
  } else {
    return ``;
  }
}


// renders license link and returns empty string if no license selected
function renderLicenseLink(licenseType) {
  if (licenseType !== "No License") {
    return `- [License](#License)`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseType) {
  if (licenseType !== "No License") {
    return `## License
    This application is covered by the ${licenseType} license.`
  }
  return ``;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  ## Description
  ${data.projectDescription}

  ## Table of Contents
  - [Usage](#usage)
  - [Installation](#installation)
  - [Questions](#questions)
  - [Test](#Test)
  - [Contributing](#contributing)
  ${renderLicenseLink(data.licenseType)}
  
  
  ## Usage
  ${data.projectUsage}

  ${renderLicenseSection(data.licenseType)}

  ## Installation
  ${data.projectInstallation}

  ## Test
  ${data.projectTest}

  ## Contributing
  ${data.projectContribution}

  ## Questions
  Contact me with any additional questions here: ${data.email} and 
  Check out my GitHub here: ${data.username}

`;
}

module.exports = generateMarkdown;
