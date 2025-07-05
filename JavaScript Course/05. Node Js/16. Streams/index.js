// 64k data on chunk

import { createReadStream} from "fs";

// const stream = createReadStream('.\\05. Node Js\\16. Streams\\data.txt', { highWaterMark: 90000});

const stream = createReadStream('.\\05. Node Js\\16. Streams\\data.txt', { encoding: 'utf8'});

stream.on('data', (data) => {
    console.log(data);
});


