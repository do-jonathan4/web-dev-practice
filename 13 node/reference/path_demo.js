const path = require('path')

// Base file name
console.log('**base file name**');
console.log(__filename);
console.log(path.basename(__filename));

//Directory name
console.log('\n', '**directory name**');
console.log(__dirname);
console.log(path.dirname(__filename));

//File extension
console.log('\n', '**file extension**');
console.log(path.extname(__filename));

//Create path object
console.log('\n', '**create path object**');
console.log(path.parse(__filename).base);

//Concatenate paths
console.log('\n', '**concatenate paths**');
console.log(path.join(__dirname, 'test', 'hello.html'));