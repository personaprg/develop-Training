// import file system 
const fs = require('fs');
// import hyper text
const http = require('http');
const queryString = require('querystring');
const contentType = require('./module/contentType');

let main = "./index.html"
let sub = "./info.html"
let style = "./style.css"


// createServer 
let server = http.createServer((req,res)=> {
  //http 모둘에서 createServer 모듈 사용
  if(req.method === 'GET' && req.url === '/'){

    //index.html
    fs.readFile(main, 'utf8', (err, data)=> {
      if(err) {
        console.log(err);
      } else {
        res.writeHead(200, contentType);
        res.end(data);
      };
    });  

    //style.css
    fs.readFile(style, 'utf8', (err, data)=> {
      if(err) {
        console.log(err);
      } else {
        res.writeHead(200, contentType);
        res.end(data);
      };
    }); 
  }
  })