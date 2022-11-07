//npm allows us to reuse code, use code by others, share our solutions
//npm.js.com
//node package manager

//local dependency - only in this project
// npm i <packageName> - install

// global dependency - use it in any project 
// npm install -g <packageName>

//package.json - manifest file (stores important info about project/package)
// manual approach  (create package.json in root, create properties)
// npm init         (stepbystep)
// npm init -y      (default)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items)
console.log(newItems)