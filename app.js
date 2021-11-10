//Using Express to write an website


const express = require("express")
const app = express() //invoke this function to set up an app, and create an instance of an express storing in app

app.listen(3001,()=>{
    console.log("listening for requests... ")
})//listen for requests,automatically refers that we want to use localhost，returns us an instance of server

app.get("/",(req,res)=>{ //"/":the root of the domain
    res.sendFile("./view/index.html",{root:__dirname})
    //res.send("<p>Home page<p/>") //automatically set the content header，instead of using this line of code below
    //res.setHeader("Content-Type","text/html")     
})  
app.get("/about",(req,res)=>{
    res.sendFile("./view/about.html",{root:__dirname})
})
app.get("/about",(req,res)=>{
    res.sendFile("./view/about.html",{root:__dirname})
})
app.get("./about-me",(req,res)=>{
    res.redirect("/about")
})


// if we send response to browser, then it doesn't carry on with the rest of the code
// so it is never gonna reach this 
app.use((req,res)=>{
    res.status(404).sendFile("./view/404.html",{root:__dirname})
    // Express doesn't realize this is actudally any kind of error so we have to in this case manually set a 404 error via res.status
}) 