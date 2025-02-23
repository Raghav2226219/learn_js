// Singleton
// Object.create

// Declaring a Symbol
const mysym = Symbol("key1");

// Object Literals

const jsuser = {
    name: "Raghav",
    [mysym]: "Using Symbol as a key",
    age: "21",
    location: "Patiala",
    email: "abc@gmail.com",
    isLoggedIn: false,
}

// console.log(jsuser.email);
// console.log(jsuser["age"]);
// console.log(jsuser[mysym]);

jsuser.email = "Raghav@gmail.com";

// Object.freeze(jsuser);

jsuser.email = "rag@gmail.com";
// console.log(jsuser);

jsuser.greeting = function(){
    console.log("Yo!!!");
}

// console.log(jsuser.greeting);
console.log(jsuser.greeting());