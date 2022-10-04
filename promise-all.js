// Promise.all():-->>

// method takes an iterable of promises as an input, and returns a single promise that resolves to an array of the results of the input promises. This returned promise will fulfill when all of the input's promises have fulfilled, or if the input iterable contains no promises. It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error.


const Promise1=Promise.resolve("hello world");
const Promise2=10;
const Promise3=new Promise((resolve,reject)=>
    setTimeout(resolve,2000,"Good Bye")
);
const Promise4=fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json());


Promise.all([Promise1,Promise2,Promise3,Promise4]).then(values=>console.log(values));