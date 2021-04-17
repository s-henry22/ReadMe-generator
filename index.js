const readMeDataArgs = process.argv.slice(2, process.argv.length);
console.log(readMeDataArgs);

const printReadMeData = readMeDataArr => {
    for (let i = 0; i < readMeDataArr.length; i += 1) {
        console.log(readMeDataArr[i]);
    }

    console.log('================');

    readMeDataArr.forEach(readMeItem => console.log(readMeItem));
        
};

printReadMeData(readMeDataArgs);