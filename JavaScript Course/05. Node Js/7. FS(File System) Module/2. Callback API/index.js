import { error } from "console"
import * as fs from "fs"

fs.mkdir("05. Node Js\\7. FS(File System) Module\\2. Callback API\\File", (error) => {
    if (error) throw error;
    else console.log("Directory Created")
})

fs.writeFile("05. Node Js\\7. FS(File System) Module\\2. Callback API\\File\\Info.txt", "This is file created for learning purpose through callback fs module " , (error) => {
    if (error) throw error;
    else console.log("Writed to a file")
})