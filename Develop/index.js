// packages necessary for application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// uses inquirer to prompt user with different parameters and questions for README generation
inquirer
  .prompt([
    {
        // collects input for project name
      type: 'input',
      name: 'projectTitle',
      message: 'Project name: ',
    },
    {
        // collects input for project description
      type: 'input',
      name: 'projectDescription',
      message: 'Describe your project: '
    },
    {
        //collects input for how to install project
        type: 'input',
        name: 'projectInstallation',
        message: 'Describe the steps to install your project (optional): '
    },
    {
        //collects instructions on how to use the project
        type: 'input',
        name: 'projectUsage',
        message: 'Give instructions on how to use your project (adding screenshots/videos as needed): '
    },
    {
        //gives user a list of licenses to choose from
        type: 'list',
        name: 'licenseType',
        message: 'Which license would you like this project to have?',
        choices: [
            {value: 'Apache'}, //Apache license
            {value: 'LGPL'}, //LGPL v3
            {value: 'MIT'}, //MIT 
            {value: 'BSD'}, //BSD 3-Clause
            {value: 'MPL'}, //Mozilla Public
            {value: 'None'} //No license
        ]
    },
    {
        //collects input on how a user can contribute to a project
        type: 'input',
        name: 'projectContribution',
        message: 'How can users contribute to your project? (Optional) '
    },
    {
        // collects input on how to test a project
        type: 'input',
        name: 'projectTest',
        message: 'How can users test your project? (Optional) '
    },
    {

        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email: '
    },
    
  ])
  .then((data) => {
   
    const filename = data.title.replace(' ', "").toLowerCase()
    fs.writeFile(`${filename}.md`, generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log("Your professional README has been generated."))
})



//function to initialize application
function init() {}

// Function call to initialize app
init();
