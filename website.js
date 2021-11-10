const http = require("http")
const fs = require("fs")// file system library
const _ =require("lodash")//is a JavaScript third-party utility library, just makes things easy for developers

const serverOne= http.createServer((req,res)=>{
    console.log("Request made")
    
    let path ="./view/"
    switch(req.url){
        case"/":
            path+="index.html"
            res.statusCode =200; // inspect and go to the network tab to see status
            break
        case"/about":
            path+="about.html"
            res.statusCode =200
            break
        case"/about-me":
            res.setHeader("location","/about")
            res.statusCode =301
            break
        default:
            path+="404.html"
            res.statusCode= 404
            break
    }
    
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log("an error occcurs,fail to read file")
            res.end()
        }else{
            res.write(data)
            res.end()
        }
    })
})

serverOne.listen("3001","localhost",()=>{
    const greet= _.once(()=>{console.log("-----HELLO-----")})//use ONCE lodash method to a created funct
    greet()
    greet()//not gonna run it again cuz ONCE.
    console.log("listening for user requests...")
})