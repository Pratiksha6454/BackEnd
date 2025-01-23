// Object----key-value pair
var obj={
    name:"Hanu",
    age:20
}
console.log(obj.name)
console.log(obj['name'])
// here i should write the key in comma

console.log(obj['age'])
console.log(obj.age);

// We  can change the value of key like ,obj.age=25,to stop it
// Object.freeze(obj);
obj.age=25
console.log(obj.age);



// we can find the length of the function
function abcd(a,b,c,i){
    console.log("hu");

}
console.log(abcd.length)
