const fs = require('fs');
const generatePage = require('./src/file-template.js');

const readmeDataArgs = process.argv.slice(2, process.argv.length);

const [project, author] = readmeDataArgs;
 

fs.writeFile('./README.md', generatePage(project, author), err => {
    if (err) throw new Error(err);

    console.log('ReadMe complete!  Look at README.md to see the output.');
});