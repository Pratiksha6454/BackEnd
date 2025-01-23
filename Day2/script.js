// JavaScript runtime environment

const fs=require('fs');
fs.writeFile("test.txt","I will upload this in git or not??",(err)=>{
    if(err)console.log(err);
    else console.log("done");
})

fs.appendFile("test.txt","I will be appended",(err)=>{
        if(err) console.log(err);
        else console.log("done");
})


fs.rename("test.txt","new-test.txt",(err)=>{
    if(err)console.log(err);
    else console.log("Changed file name");
})

fs.copyFile("new-test.txt","copy.txt",(err)=>{
    if(err)console.log(err);
    else console.log("pasted");
})

fs.unlink("test.txt",(err)=>{
    if(err)console.log(err);
    else console.log("deleted");
})

fs.readFile("test.txt", "utf-8", (err, data) => {
    if (data) console.log(data);  // Logs the file content if successful
    else console.log(err);  // Logs the error if reading failed
});
