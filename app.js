var http = require('http');
var path = require('path');
var server = require('./server.js');

http.createServer(function (request, response) {
    // 获取请求路径
    console.log('url', request.url)
     if(request.url == '/'){
       filePath = path.join(__dirname, '/public/index.html')
     }else{
       filePath = path.join(__dirname,'/public/'+ request.url)
     }
    server.serveStatic(response,filePath);
}).listen(4000,function(){
    console.log("Server listening on port 4000. ");
});
