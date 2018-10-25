var jwt = require('jsonwebtoken'); 
const { parse } = require('querystring');
var express = require('express');
var cors = require('cors')

var app = express()
app.use(cors());
app.use(express.static('public'))

  
app.post('/login', function (req, res) {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });
  req.on('end', () => {
    var payload = {
      name: 'Andrea',
      email: 'andrea.leo@frontiere21.it',
      iat: Date.now(),
      external_id: '123456'
    };
    secret = '2324f406-1910-4179-a593-b52cbcaf4975';
    var params = parse(body);
    console.log(params);
    // verify auth
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    var jwt_token = jwt.sign(payload, secret);
    console.log("jwt token gen ", jwt_token);
    var data = {
      result: 'success',
      jwt: jwt_token
    }
    res.json(data);
  });
});

app.get('/', function (req, res) {
  res.send('hello world')
});
var port = process.env.PORT || 3000; // heroku
app.listen(port, function () {
    console.log('Example app listening on port ', port);
});


// var jwt = require('jsonwebtoken');
// const { parse } = require('querystring');
// const express = require('express');

// const hostname = '127.0.0.1';
// const port = 3000;

// const app = express()
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))
// app.use(express.static('public'))

// var http = require('http');

// var payload = {
//     name: 'Andrea',
//     email: 'andrea.leo@frontiere21.it',
//     iat: Date.now(),
//     external_id: '123456'
//   };

  




// const server = http.createServer((req, res) => {
//                                  if (req.method === 'POST') {
//                                  // Handle post info...
                                    //  let body = '';
                                    //  req.on('data', chunk => {
                                    //     body += chunk.toString();
                                    //  });
                                    //  req.on('end', () => {
                                    //     console.log(parse(body));
                                    //     res.end('ok');
                                    //  });
//                                  }
//                                  else {
                                    // res.statusCode = 200;
                                    // res.setHeader('Content-Type', 'text/plain');
                                    // var token = jwt.sign(payload, 'TILEDESK_SECRET_HERE');
                                    // res.end(token);
//                                  }
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
