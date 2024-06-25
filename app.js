const fs = require('fs')

fs.readFile('index.html', function(error, data ) {
    res.writeHead(200, {'Content_Type':'text/html'})
    res.end(data)
})


const http = require('http');


http.createServer(function(req, res){
    res.writeHead(200, {'Content_Type': 'text/html'})
    res.end('hello')
}).listen(8000)

const fs = require('fs');

fs.readFile('index.html', function(error, data){
    res.writeHead(200, {'Content_Type': "text/html"})
    res.end(data)
})



const fs = require('fs');
const { log } = require('console');

fs.appendFile('myfile.txt', 'hello', function(error) {
    if(err) console.log(err);
    else    console.log("saved");
})

fs.appendFile('myfile.text', 'hello', function(error){
    if(err) console.log(err);
    else    console.log('save');
})

fs.appendFile('myfile.txt', 'hello', function(error) {
    if(err)  console.log(err);
    else     console.log('saved!');
})


fs.writeFile('myfile.text', function(error){
    if(err) throw err;
    else console.log('saved!');
})

fs.unlink('myfile.txt', function(error) {
    if(err) throw err;
    else console.log('saved!');
})

fs.rename('oldFile.txt', 'newFile.text', function(error) {
    if(err) throw err;
    else console.log("file renamed");
})

fs.rename('oldFile', 'newFile', function(error) {
    if(err) throw err;
    else console.log("file renamed");
})



