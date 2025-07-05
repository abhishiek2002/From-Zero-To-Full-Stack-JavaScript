// Summary of Important Methods:
// 1. path.basename(): Gets the file name.
// 2. path.dirname(): Gets the directory path.
// 3. path.extname(): Gets the file extension.
// 4. path.join(): Joins paths.
// 5. path.resolve(): Resolves relative paths to absolute.
// 6. path.isAbsolute(): Checks if the path is absolute.
// 7. path.normalize(): Cleans up the path.
// 8. path.parse() and path.format(): Breaks down a path into parts and reassembles it.


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// First, you need to import the path module in your Node.js script:

import { dir, log } from "console";
import path from "path";
// const path = require("path");

// ************************************

// Base Name ✅
// 1. path.basename()
// Purpose: Gets the last part of a path (the file or directory name).
// Syntax: path.basename(path[, ext])
// Example:

const filePath = "D:\\From-Zero-To-Full-Stack-JavaScript\\JavaScript Course\\05. Node Js\\6. Path Module\\index.js";

console.log(path.basename(filePath));  // index.js
console.log(path.basename("D:\\From-Zero-To-Full-Stack-JavaScript\\JavaScript Course\\05. Node Js\\6. Path Module"));  // 6. Path Module

// omit extenction ✅
// If you want to remove the file extension:

console.log(path.basename(filePath, '.js'));  // index


// **********************************

// Directory Name ✅
// 2. path.dirname()
// Purpose: Gets the directory name of a path (everything except the last part).
// Syntax: path.dirname(path)
// Example:

console.log(path.dirname(filePath));  // D:\From-Zero-To-Full-Stack-JavaScript\JavaScript Course\05. Node Js\6. Path Module


// ********************************

// Extenction ✅
// 3. path.extname()
// Purpose: Gets the file extension from a path.
// Syntax: path.extname(path)
// Example:

console.log(path.extname(filePath));  // .js


// ******************************

// Join✅
// 4. path.join()
// Purpose: Joins multiple path segments into a single path, and it handles differences in operating system path formats.
// Syntax: path.join([...paths])
// Example:

console.log(path.join(path.dirname(filePath),path.basename(filePath)));  // D:\From-Zero-To-Full-Stack-JavaScript\JavaScript Course\05. Node Js\6. Path Module\index.js

let fullPath = path.join('/user', 'Abhishek', 'project', 'index.js')

console.log(fullPath); // \user\Abhishek\project\index.js

// Go Up a level ✅

console.log(path.join('/user', 'Abhishek', 'project', 'index.js', '..'));  // \user\Abhishek\project

console.log(path.join('/user', 'Abhishek', 'project', 'index.js', '..', '..'));  // \user\Abhishek



// ******************************

// Resolve ✅
// 5. path.resolve()
// Purpose: Resolves a sequence of paths or path segments into an absolute path.
// If no absolute path is given, it gives the current directory (__dirname).
// Syntax: path.resolve([...paths])
// Example:

const absolutePath = path.resolve('./index.js');

console.log(absolutePath); // Output: (absolute path to index.js, depending on where you run the code) (for this condition :- d:\From-Zero-To-Full-Stack-JavaScript\JavaScript Course\index.js)

console.log(path.resolve('./')); //  d:\From-Zero-To-Full-Stack-JavaScript\JavaScript Course
console.log(path.resolve());     //  d:\From-Zero-To-Full-Stack-JavaScript\JavaScript Course


// // It can be used to resolve relative paths into absolute paths.


// ************************

// isAbsolute ✅
// 6. path.isAbsolute()
// Purpose: Checks if a given path is an absolute path.
// Syntax: path.isAbsolute(path)
// Example:

console.log(path.isAbsolute("d:\\From-Zero-To-Full-Stack-JavaScript\\JavaScript Course\\05. Node Js\\6. Path Module\\index.js"));  // true

console.log(path.isAbsolute("05. Node Js\\6. Path Module\\index.js"));  // false


// ***********************

// Normalize ✅
// 7. path.normalize
// Normalizes a path, fixing any redundant .. or . segments.
// Example:

const normalizedPath = path.normalize('/user//local/../index.html');
console.log(normalizedPath);  // Output: /user/index.html


// ***********************

// Parse ✅
// 8. path.parse()
// path.parse(): Breaks down a path into an object with properties like root, dir, base, name, and ext.
// Syntax: path.parse(path)
// Example:

const parsedPath = path.parse(filePath)
console.log(parsedPath);   
console.log(parsedPath.dir);   
console.log(parsedPath.base);   
console.log(parsedPath.ext);   
console.log(parsedPath.name);   
console.log(parsedPath.root);   


// output :-

// {
//     root: 'D:\\',
//     dir: 'D:\\From-Zero-To-Full-Stack-JavaScript\\JavaScript Course\\05. Node Js\\6. Path Module',
//     base: 'index.js',
//     ext: '.js',
//     name: 'index'
// }
// D:\From-Zero-To-Full-Stack-JavaScript\JavaScript Course\05. Node Js\6. Path Module
// index.js
// .js
// index
// D:\


// *****************************

// Format ✅
// 9. path.format()
// path.format(): The reverse of path.parse(). It builds a path string from an object.

const pathObject = {
    dir: 'JavaScript Course\\05. Node Js',
    base: '6. Path Module'
}

console.log(path.format(pathObject));  // JavaScript Course\05. Node Js\6. Path Module
