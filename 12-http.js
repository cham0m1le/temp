const http = require('http')

const server  = http.createServer((req, res) =>{
  if(req.url === '/'){
    res.end('Welcome to homepage')
  }
  if(req.url === '/about'){
    res.end('Welcome to about page')
  }
  // req is a very big object
  // endpoints are basically url property
  // res.write('Welcome to the homepage.')
  // res.end()

  res.end(`
  <h1>Oops!</h1>
  <p>We cant seem to find the page.</p>
  <a href="/">back home</a>
  `)
  // res.end is basically an else statement
})
//

server.listen(5000)
//port for website
//open at localhost:5000