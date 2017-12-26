var http = require('http');
var path = require('path');
var server = require('./server.js');

http.createServer(function (request, response) {
    // 获取请求路径
     if(request.url = '/'){
       filePath = path.join(__dirname, '/public/index.html')
       console.log('filePath', filePath)       
     }else{
       filePath = path.join(__dirname,'/public/'+ request.url)
       console.log('filePath', filePath)
     }
    // response.writeHead(200,{'Content:type': 'text/html'});
    // response.end("hahahah");
    server.serveStatic(response,filePath);
}).listen(4000,function(){
    console.log("Server listening on port 4000. ");
});
