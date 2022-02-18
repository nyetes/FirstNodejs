const http = require('http');
const { title } = require('process');
const port = 5000;

const server = http.createServer(function(req,res){
   res.setHeader('content-Type', 'Textshtml');
   res.write('<html>');
   res.write('<title>My Node.js title</title>');
   res.write('<body>Hello Devloper sir!</body>');
   res.write('</html>');


});

server.listen(port, function(error){
    if (error){
        console.log('something error', error);
    } else {
        console.log('server is listening ' + port)
    }
});


