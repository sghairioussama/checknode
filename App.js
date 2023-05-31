//require express
const express=require("express");

const http=require("http");

http.createServer((request,response)=>{
    response.end("hello from server")
}).listen(5000);

console.log("the server is running at http://127.0.0.1:5000/")

//require file system FS

const fs = require("fs")

//create file with fs

fs.writeFile("welcome.txt","hello node", function(error){
    if (error) throw (error)
    console.log("file created successfully")
})