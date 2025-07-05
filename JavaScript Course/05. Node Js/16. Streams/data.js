import fs from "fs";

for (let i = 0 ; i < 10000 ; i++) {
    fs.writeFileSync(".\\05. Node Js\\16. Streams\\data.txt", `${i}\n`, {flag: "a"});  // flag can be "w" (default), "r", "a"
}