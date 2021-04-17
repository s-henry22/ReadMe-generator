const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'project title',
            message: 'What is the name of the project?'
        },
        {
            type: 'input',
            name: 'author name',
            message: 'Who is the author?'
        },  
        {
            type: 'input',
            name: 'project description',
            message: 'Provide a description of the project (Required):'
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