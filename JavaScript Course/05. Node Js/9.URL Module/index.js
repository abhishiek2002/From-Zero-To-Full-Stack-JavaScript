// ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
// │                                              href                                              │
// ├──────────┬──┬─────────────────────┬────────────────────────┬───────────────────────────┬───────┤
// │ protocol │  │        auth         │          host          │           path            │ hash  │
// │          │  │                     ├─────────────────┬──────┼──────────┬────────────────┤       │
// │          │  │                     │    hostname     │ port │ pathname │     search     │       │
// │          │  │                     │                 │      │          ├─┬──────────────┤       │
// │          │  │                     │                 │      │          │ │    query     │       │
// "  https:   //    user   :   pass   @ sub.example.com : 8080   /p/a/t/h  ?  query=string   #hash "
// │          │  │          │          │    hostname     │ port │          │                │       │
// │          │  │          │          ├─────────────────┴──────┤          │                │       │
// │ protocol │  │ username │ password │          host          │          │                │       │
// ├──────────┴──┼──────────┴──────────┼────────────────────────┤          │                │       │
// │   origin    │                     │         origin         │ pathname │     search     │ hash  │
// ├─────────────┴─────────────────────┴────────────────────────┴──────────┴────────────────┴───────┤
// │                                              href                                              │
// └────────────────────────────────────────────────────────────────────────────────────────────────┘
// (All spaces in the "" line should be ignored. They are purely for formatting.)






import {URL} from "url";

const myURL = new URL("https://www.example.com:8080/p/a/t/h?query=string#hash");

console.log(myURL.hash);
console.log(myURL.host);
console.log(myURL.hostname);
console.log(myURL.port);
console.log(myURL.href);
console.log(myURL.protocol);
console.log(myURL.search);
console.log(myURL.searchParams);


// Both works the same

console.log(myURL.toString());
console.log(myURL.toJSON());

// ********************************

// You can change the properties of URL

const myURL2 = new URL('https://example.org');
myURL2.pathname = '/a/b/c';
myURL2.search = '?d=e';
myURL2.hash = '#fgh';
console.log(myURL2);


// **************************** or like this

const pathname = '/a/b/c';
const search = '?d=e';
const hash = '#fgh';
const myURL3 = new URL(`https://example.org${pathname}${search}${hash}`);

console.log(myURL3.href)