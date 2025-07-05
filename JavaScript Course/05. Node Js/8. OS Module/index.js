// Summary

// 1. os.platform()  ===> similar to process.platform

// 2. arch()

// 3. os.cpus()

// 4. os.hostname()

// 5. os.networkInterfaces()

// 6. os.freemem()

// 7. os.totalmem()




import os from 'os';


// os.platform() ✅ 
// Returns: <string>
// Returns a string identifying the operating system platform for which the Node.js binary was compiled. The value is set at compile time. Possible values are 'aix', 'darwin', 'freebsd','linux', 'openbsd', 'sunos', and 'win32'.

// The return value is equivalent to process.platform.

console.log(os.platform());

// os.arch() ✅
// Returns: <string>
// Returns the operating system CPU architecture for which the Node.js binary was compiled. Possible values are 'arm', 'arm64', 'ia32', 'loong64', 'mips', 'mipsel', 'ppc', 'ppc64', 'riscv64', 's390', 's390x', and 'x64'.

console.log(os.arch());

// os.cpus() ✅
// Returns: <Object[]>
// Returns an array of objects containing information about each logical CPU core. The array will be empty if no CPU information is available, such as if the /proc file system is unavailable.

console.log(os.cpus());


// os.hostname() ✅
// Returns: <string>
// Returns the host name of the operating system as a string.

console.log(os.hostname());


// os.networkInterfaces() ✅
// Returns: <Object>
// Returns an object containing network interfaces that have been assigned a network address.

// Each key on the returned object identifies a network interface. The associated value is an array of objects that each describe an assigned network address.

console.log(os.networkInterfaces());


// os.freemem() ✅
// Returns: <integer>
// Returns the amount of free system memory in bytes as an integer.

console.log(os.freemem());


// os.totalmem() ✅
// Returns: <integer>
// Returns the total amount of system memory in bytes as an integer.

console.log(os.totalmem());

