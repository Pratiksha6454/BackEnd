// sync-----line by line
// async-didnt wait for long time taking application
async function abcd(){
    var blob=await fetch("https://randomuser.me/api/");
    var ans= await blob.json();
    console.log(ans);
    console.log("Ho gya print function");
}
console.log("I am printing function");
abcd();
console.log("I will come after the function")
