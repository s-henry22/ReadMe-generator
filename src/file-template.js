const generatePage = (projectTitle, authorName) => {
    return `
    # ${projectTitle}
    ## ${authorName}
    `;
};

module.exports = generatePage;