const os = require('os')

// Platform
console.log('\n', '**platform**');
console.log(os.platform());

// CPU arch
console.log('\n', '**CPU arch**');
console.log(os.arch());

// CPU Core Info
console.log('\n', '**CPU core info**');
console.log(os.cpus());

// Free memory
console.log('\n', '**Free memory**');
console.log(os.freemem());

// Total memory
console.log('\n', '**Total memory**');
console.log(os.totalmem());

// Home dir
console.log('\n', '**Home dir**');
console.log(os.homedir());

// Uptime
console.log('\n', '**Uptime**');
console.log(os.uptime());

