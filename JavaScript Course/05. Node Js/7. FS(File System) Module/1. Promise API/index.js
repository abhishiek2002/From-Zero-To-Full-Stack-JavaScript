// Summary of Important Methods:

// 1. File Handling:
// fs.readFile(), fs.writeFile(), fs.appendFile(), fs.unlink(), fs.rm()

// 2. Directory Handling:
// fs.mkdir(), fs.readdir(), fs.rmdir(), fs.rm()

// 3. Metadata:
// fs.stat()

// 4. File Copying:
// fs.copyFile()

// 5. Monitoring Changes:
// fs.watch()

// 6. Access Control:
// fs.access()

// --------------------------------------------------------------------------------------------------------------------------------


import * as fs from "fs/promises";

// Create Folder ✅

// creating directory or folder

try {
  await fs.mkdir("d:\\nodejs");
  console.log("Folder Created ...");
} catch (error) {
  console.log(error);
}

// // after creating "nodejs" folder or directory, now make a another folder in "nodejs" naming "js"

try {
  await fs.mkdir("d:\\nodejs\\js"); // if we run this code again then it show error (file already exists)
  console.log("Folder Created ...");
} catch (error) {
  console.log(error);
}

// 💞 If you want to create a dir in another directory which is not exist write now(something like mkdirs in python) then you can use

try {
  await fs.mkdir("d:\\nodejs\\js\\redux\\tooolkit", { recursive: true });
  console.log("Folder Created ...");
} catch (error) {
  console.log(error);
}

// ****************************************

// Read Directory ✅
// Reads the contents of a directory and returns an array of the file names in that directory.

try {
  const Files = await fs.readdir(
    "D:\\From-Zero-To-Full-Stack-JavaScript\\JavaScript Course\\05. Node Js\\7. FS(File System) Module\\Files"
  );
  for (const file of Files) {
    console.log(file);
  }
} catch (error) {
  console.log(error);
}

// *************************************

// Remove Directory ✅

// For removing directory or folder , it should be empty. (otherwise throw error "directory not empty")

try {
  await fs.rmdir("d:\\nodejs\\courses");  // if you run this again then throw error (no such file or directory)
} catch (error) {
  console.log(error);
}

// *************************************

// Create and Write Files ✅

// If the file doesn't exist, it will create the file.
// If the file exists, it will overwrite the content.This method write data to a file, replacing the file if it exists.

try {
    await fs.writeFile(".\\05. Node Js\\7. FS(File System) Module\\1. Promise API\\README.md", "Hello, I am creating file and writing text in it.\nThis is second line");
} catch (error) {
    console.log(error);
}

// *********************************

// Read File ✅

try {
  const lines = await fs.readFile(
    ".\\05. Node Js\\7. FS(File System) Module\\1. Promise API\\README.md",
    "utf-8"
  );
  console.log(lines);
} catch (error) {
  console.log(error);
}

// utf8: Specifies the character encoding of the file.
// without utf8 it show a buffer that is encoded , and utf8 decode it

// *********************************

// Append Data ✅

// To add data to an existing file without overwriting it, use fs.appendFile.

try {
  await fs.appendFile(
    ".\\05. Node Js\\7. FS(File System) Module\\1. Promise API\\README.md",
    "This is append line"
  );
} catch (error) {
  console.log(error);
}

// ********************************

// Copy File ✅

try {
  await fs.copyFile(
    ".\\05. Node Js\\7. FS(File System) Module\\1. Promise API\\README.md",
    ".\\05. Node Js\\7. FS(File System) Module\\1. Promise API\\Info.txt"
  );
} catch (error) {
  console.log(error);
}

// *****************************

// Stats ✅
// fs.stat() and fs.statSync()
// Retrieves the status (metadata) of a file or directory, including size, creation date, etc.
// You can use this to check if a path is a file or directory using the isFile() and isDirectory() methods.

try {
  const stat = await fs.stat(".\\05. Node Js\\7. FS(File System) Module\\1. Promise API\\README.md");
  console.log(stat);
  console.log("Is this a file : ", stat.isFile());
  console.log("Is this a directory :", stat.isDirectory());
} catch (error) {
  console.log(error);
}

// *****************************

// Remove File Or Directory ✅
// fs.rm() and fs.rmSync()
// Removes a file or directory (unlike fs.rmdir, it can remove non-empty directories).

// recursive: true allows deleting directories with contents.

try {
    await fs.rm(".\\05. Node Js\\7. FS(File System) Module\\Files\\Hello - Copy (6).txt", {recursive:true});
    console.log("File Deleted")
} catch (error) {
    console.log(error)
}

