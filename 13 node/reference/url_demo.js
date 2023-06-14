const url = require('url')

const myURL = new URL('http://mywebsite.com/hello.html?id=100&status=active')

//Serialized URL
console.log('\n', '**Serialized URL**');
console.log(myURL.href);
console.log(myURL.toString());

//Host (root domain)
console.log('\n', '**Host**');
console.log(myURL.host);

//Hostname (does not get port)
console.log('\n', '**Hostname**');
console.log(myURL.hostname);

//Pathname
console.log('\n', '**Pathname**');
console.log(myURL.pathname);

//Serialized query
console.log('\n', '**Serialized query**');
console.log(myURL.search);

//Params object
console.log('\n', '**Params object**');
console.log(myURL.searchParams);

//Add param
console.log('\n', '**Add param**');
myURL.searchParams.append('abc', '123')
console.log(myURL.searchParams);

//Loop through params
console.log('\n', '**Loop through params**');
myURL.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))