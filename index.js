const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'project title',
            message: 'What is the name of the project? (Required)',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name for the project.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'author name',
            message: 'Who is the author? (Required)',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name for the author.')
                    return false;
                }
            }
        },  
        {
            type: 'input',
            name: 'project description',
            message: 'Provide a description of the project (Required):',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter information describing the project.')
                    return false;
                }
            }
        },
        {
            type:'checkbox',
            name: 'languages',
            message: 'Which languages was the project built with?',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'installation steps',
            message: 'What are the steps neccessary to install the application?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use.'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please enter contribution guidlines for other developers'
        },
        {
            type: 'input',
            name: 'Tests',
            message: 'Provide examples of how to run application testing'
        }
    ]);
};    

promptUser().then(answers => console.log(answers));


/*const fs = require('fs');
const generatePage = require('./src/file-template.js');

const pageContent = generatePage(project, author);
 
fs.writeFile('./README.md', generatePage(project, author), err => {
    if (err) throw new Error(err);

    console.log('ReadMe complete!  Look at README.md to see the output.');
});*/