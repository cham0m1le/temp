const { readFileSync, writeFileSync, write } = require('fs');
//const fs = require('fs');
//fs.readFileSync

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync(
  './content/result-sync.txt',
  `here is the result : ${first}, ${second}`,
  {flag: 'a'}
) 