const PORT = process.env.PORT || 3000;
var http = require("http");

// Create server object
http
    .createServer(function(request,response){
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write('<figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8JGz55WDyeEx9L6gElgMaW9kPO7zBMSdndA&s" style="width:20%;">');
        response.write("Source: https://scoutaom.com/"); // Write a response to the client
        response.end(""); // End response
    })
    .listen(PORT); // The serve object listens on port
