var arr=[1,2,3,4,5]
//foreach map filter find indexOf



//forEach
// used to retrive the array
arr.forEach(function(val){
console.log(val+2);
})


//map
// It return a new array of having same memory as the initial array having.
var arr=[1,2,3,4];

var ans=arr.map(function(val){
    return val+12;
})
console.log(ans);


//filter
//find the array element with an condition
//return array of unpredictable memory
//returning true will put the value in the new array.
arr=[1,2,3,5,4,3,6,-1,6,8,11];
var xoxo=arr.filter(function(val){
    return val%2==0;
})
console.log(xoxo);



//find
arr=[12,3,4,5,6,8,9]
var a=arr.find(function (val){
    if(val==12){
        return val;
    }
})
console.log(a)


//indexOf
a=[1,3,5,9]
console.log(a.indexOf(9));