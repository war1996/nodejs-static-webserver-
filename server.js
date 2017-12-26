var fs = require('fs');
var mime = require('mime');
var cache = {};

function send404(response){
    response.writeHead(404,{"Content-type":"text/html"});
    response.write("<h1>ERROR 404 FILE NOT FOUND</h1>");
    response.end();
}
function sendFile(response,filePath,fileContents){
    response.writeHead(200,{"Content-type": mime.getType(filePath)});
    response.end(fileContents);

}


function serveStatic(response,filePath){
    console.log("hahaha")
    if(cache[filePath]){
        sendFile(response,filePath,cache[filePath]);
    }else{
        fs.exists(filePath,function(exists){
            if(exists){
                fs.readFile(filePath,function(err,data){
                    if(err){
                        send404(response);
                    }else{
                        cache[filePath] = data;
                        sendFile(response,filePath,data);
                    }
                })
            } else{
                send404(response);
            }
        })
    }

}
exports.serveStatic = serveStatic;

