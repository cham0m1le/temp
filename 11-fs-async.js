const { readFile, writeFile} = require('fs');

//callback - run when done

readFile('./content/first.txt','utf8', (err, result) => {
  if (err) {
    console.log(err);
    return
  }
  // console.log(result);
  const first = result;
  readFile('./content/second.txt', 'utf8',(err,result)=>{
    if (err) {
      console.log(err);
      return
    }
    // console.log(result);
    const second = result;
    writeFile('./content/result-async.txt',
    `here is the result : ${first}, ${second}`,
    (err,result)=>{
      if(err){
        return
      }
      console.log(result)
    }
    )
  })
})
//shows buffer if utf is not provided