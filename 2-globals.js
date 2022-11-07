//GLobals - no window

// __dirname   - path to current directory
// __filename  - file name
// require     - function to use module(CommonJS)
// module      - info abt current module (file)
// process     - info abt env where the program is being executed

console.log(__dirname)

setInterval(() => {
  console.log('Hello world')
}, 1000);

//CTRL + C == stop loop
//type 'clear' clear terminal