const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

// Function to serve static files
fs.readFile('index.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();
    }).listen(PORT);

    console.log(`Server started on localhost:${PORT}`)
});