const http=require("http");


const server=http.createServer((req,res)=>{
    res.end("Hi Pratiksha");

})
server.listen(3000,()=>console.log("running"));