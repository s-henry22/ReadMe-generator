const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'project title',
            message: 'What is the name of the project?'
        }
    ])
.then(answers => console.log(answers));


/*const fs = require('fs');
const generatePage = require('./src/file-template.js');

const pageContent = generatePage(project, author);
 
fs.writeFile('./README.md', generatePage(project, author), err => {
    if (err) throw new Error(err);

    console.log('ReadMe complete!  Look at README.md to see the output.');
});*/