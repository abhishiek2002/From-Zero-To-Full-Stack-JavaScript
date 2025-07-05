// Summary of Synchronous Methods:
// File Operations:

// fs.readFileSync(): Read file.
// fs.writeFileSync(): Write to file.
// fs.appendFileSync(): Append to file.
// fs.unlinkSync(): Delete file.
// fs.renameSync(): Rename/move file.
// Directory Operations:

// fs.readdirSync(): Read directory.
// fs.mkdirSync(): Create directory.
// fs.rmdirSync(): Remove empty directory.
// fs.rmSync(): Remove file or non-empty directory.
// File and Directory Metadata:

// fs.statSync(): Get file/directory metadata.
// fs.accessSync(): Check file/directory accessibility.
// File Copying:

// fs.copyFileSync(): Copy file.

// -------------------------------------------------------------------------------------------------------------------------------

import * as fs from "fs";

// Create Directory ✅

// fs.mkdirSync(".\\05. Node Js\\7. FS(File System) Module\\3. Sync API\\File" , {recursive: true});
// console.log("File created");

// Write File ✅

fs.writeFileSync(".\\05. Node Js\\7. FS(File System) Module\\3. Sync API\\File\\Info.txt", "This file is created only for learning purpose through synchronous fs module.")
